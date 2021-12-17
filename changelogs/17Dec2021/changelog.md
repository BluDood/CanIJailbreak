# Changelog for 17. December 2021

### HUGE update! 🎉

- Completely rewrote the backend JS script
    - Proper device and version detection
    - Proper implementation of version-specific jailbreaks
- iPad support!
    - Since iPad Pros use a Mac user agent, it now prompts the user to request the mobile site instead.
- More detailed information about jailbreaks/vulnerabilities
    - Vulnerabilities
        - Release date (if there is one)
        - Link to security contents by Apple
        - Link to "Post" where the exploiter has told us about the vulnerability
    - Jailbreaks
        - Shows the supported processors
        - Shows the range of iOS versions (not hard-coded anymore)
- Jailbreaks are now dynamically added to the page from an array in JavaScript, instead of being hard-coded in HTML