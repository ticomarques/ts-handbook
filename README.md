# Typescript reference

Reference based on: 
https://www.youtube.com/watch?v=zeCDuo74uzA

It is a TS handbook, all we use often on JS+TS coding.

# ./amazing-ts-setup
It is a configuration (tsconfig.json) for most of our projects

# Axios - it includes declaration type files 
Axios is an example of project which has the declaration files built-in. No need to install the types, because it comes with axios already.

# Express - it does not include declaration type files (/@types/express/)

Express does not come with declaration types built-in, so we need to install it using: npm install @types/express

Or use the quick fix on vscode