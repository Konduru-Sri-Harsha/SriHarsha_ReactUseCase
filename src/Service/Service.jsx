const get_librarian = () => {
    fetch(" http://localhost:4200/librarian")
        .then((result) => {
            console.log(
                result
                .json()
                .then((finalResult) => {
                    console.log(finalResult);
                    return finalResult;
                })
                .catch((error) => {
                    console.log(error);
                })
            );
        })
        .catch((error) => {
            console.log(error);
        });
};

const register_librarian = (object) => {
    fetch(" http://localhost:4200/librarian", {
            method: "POST",
            body: JSON.stringify(object),
            headers: {
                "content-type": "application/json",
            },
        })
        .then((result) => {
            result.json();
        })
        .then((data) => console.log(data));
};

const get_member = () => {
    fetch(" http://localhost:4200/member")
        .then((result) => {
            console.log(
                result
                .json()
                .then((finalResult) => {
                    console.log(finalResult);
                    return finalResult;
                })
                .catch((error) => {
                    console.log(error);
                })
            );
        })
        .catch((error) => {
            console.log(error);
        });
};

const register_member = (object) => {
    fetch(" http://localhost:4200/member", {
            method: "POST",
            body: JSON.stringify(object),
            headers: {
                "content-type": "application/json",
            },
        })
        .then((result) => {
            result.json();
        })
        .then((data) => console.log(data));
};

export { get_librarian, register_librarian, get_member, register_member };