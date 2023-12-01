class Auth{
    public logIn(username: string, password: string){
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:3000/profiles?username=${username}`)
            .then((response) => {
                response.json()
                    .then((data) => {
                        if(data.length === 0){
                           reject(false);
                        }
                        else{
                            if(data[0].password === password){
                                localStorage.setItem('username', data[0].username);
                                localStorage.setItem('id', data[0].id);
                                resolve(null);
                            }
                            else{
                                reject(false);
                            }

                        }

                    })
                    .catch(() => {
                        reject(false);
                    })
            })

        })
    }

    public getTasks(id: number){
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:3000/tasks?user_id=${id}`)
                .then((response) => {
                    response.json()
                        .then((data) => {
                            resolve(data);
                        })
                        .catch((reason) => {
                            reject(reason);
                        })
                })
                .catch((reason) => {
                   reject(reason);
                })
        });
    }
}

const auth = new Auth();
export default auth;