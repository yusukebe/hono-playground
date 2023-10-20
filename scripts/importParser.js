export function importParser(code) {

    code = code.replace(/from\s+[\'\"\`](.+)[^\'\"\`][\'\"\`]/gmi, (match, k) => {
        if (!match.includes("\/\/")) {
            match = match.replace(k, "https://esm.sh/" + k)
        }

        return match;
    })

    console.log(code)
    return code;
}