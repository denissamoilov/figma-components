module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-source-figma`,
            options: {
                // For files:
                fileId: `bDTjyvk46zudfjITwwyAXFMZ`,
                // For projects:
                // projectId: `724870`,
                // Get an access token from Figma Account Settings.
                accessToken: `1671-116b90f1-4750-4c92-a1da-407781999a75`,
            },
        },
    ],
}