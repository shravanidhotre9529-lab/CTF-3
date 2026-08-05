// Vulnerable deep merge function
function deepMerge(target, source) {
    for (let key in source) {
        if (typeof source[key] === 'object' && source[key] !== null) {
            if (!target[key]) {
                target[key] = {};
            }
            deepMerge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
}

module.exports = (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const userInput = req.body;
    
    // Default theme settings
    const defaultTheme = {
        color: '#00ffff',
        mode: 'dark'
    };

    // VULNERABILITY: Merging user input directly into an object using a vulnerable recursive function
    deepMerge(defaultTheme, userInput);

    // Verify if Prototype Pollution was successful
    // We create a brand new, empty object. If Object.prototype was polluted,
    // this empty object will now have the polluted property.
    const checkObj = {};
    let message = "Theme applied successfully.";
    
    if (checkObj.isAdmin === true) {
        message = "inroomctf{pr0t0_p0llut10n_m4st3r}";
    }

    // CRITICAL CLEANUP: Because Vercel serverless functions re-use the Node.js process 
    // across multiple invocations (warm starts), we MUST clean up the global prototype.
    // Otherwise, one player solving the challenge will permanently solve it for all other 
    // players who hit the same lambda instance.
    delete Object.prototype.isAdmin;

    return res.status(200).json({
        success: true,
        theme: defaultTheme,
        message: message
    });
};
