const data = {
    sign_up_user_params: {
        name: "taishi",
        bio: "bio",
        email: "taishi.asami123@gmail.com",
        password: "password",
        password_confirmation: "password"
    }
}

fetch("https://teachapi.herokuapp.com/sign_up", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
})

    .then(response => {
        const json = response.json();
        return json;
    })

    .then(json => {
        console.log(json);
    });

/*
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
*/