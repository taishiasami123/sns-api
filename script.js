
//ユーザー登録
const register = () =>{
    const name = document.getElementById("signUpInputName").value;
    const bio = document.getElementById("signUpInputBio").value;
    const email = document.getElementById("signUpInputEmail").value;
    const password = document.getElementById("signUpInputPwd").value;
    const password_confirmation = document.getElementById("signUpInputCfmPwd").value    
    const data = {
        sign_up_user_params: {
            name: name,
            bio: bio,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }
    }
    console.log("今送ったデータ");
    console.log(JSON.stringify(data));
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
    }

// ユーザーログイン
const login = () =>{
    const email = document.getElementById("signInInputEmail").value;
    const password = document.getElementById("signInInputPwd").value;
    const passwordConfirmation = document.getElementById("signInInputCfmPwd").value;
    const data = {
        sign_in_user_params: {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        }
    }
    console.log("今送ったデータ");
    console.log(JSON.stringify(data));
    fetch("https://teachapi.herokuapp.com/sign_in", {
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
    }

// ユーザー一覧
const userList = () =>{
    fetch("https://teachapi.herokuapp.com/users?page=2&limit=100&query=", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Bearer 3CZFxXXePI7Q66tGf1Gcvwtt"
        },
    })
        .then(response => {
            const json = response.json();
            return json;
        })
        .then(json => {
            console.log(json);
        });
}

userList();
