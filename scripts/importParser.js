export function importParser(code) {

    code = code.replace(/from\s+[\'\"\`](.+)[^\'\"\`][\'\"\`]/, (match, k) => {
        if (!match.includes("\/\/")) {
            match = match.replace(k, "https://esm.sh/" + k)
        }

        return match;
    })

    return code;
}