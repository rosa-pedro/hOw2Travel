import axios from "axios";

const client = axios.create({
   baseURL: 'http://193.191.177.75:3300/users'
});

const signIn = async (email, password) => {
    const {data} = await client.get(`/${email}/${password}`);
    console.log('data: ' + data);

    return data;
};

const signUp = async (username, email, password) => {
    await client.post( '/',[{
        name: username,
        email: email,
        password: password,
    }]);
};

export const authService = {
    signIn,
    signUp,
};
