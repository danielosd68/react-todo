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

    public getTodayTasks(tasks: any){
        return new Promise((resolve, reject) => {
            const todayDate = new Date();
            let day = String(todayDate.getDate());
            let month = String(todayDate.getMonth() + 1);
            let year = String(todayDate.getFullYear());

            if(day < "10"){
                day = "0" + day;
            }
            if(month < "10"){
                month = "0" + month;
            }

            let date = day + "/" + month + "/" + year;

            console.log(date);


            if(tasks !== null){
                console.log(tasks);
                // @ts-ignore
                const todayTasks = tasks.filter((task) => task.expire === date && !task.done);
                console.log(todayTasks);
                resolve(todayTasks);
            }
            else{
                reject();
            }
        })

    }
}

const auth = new Auth();
export default auth;