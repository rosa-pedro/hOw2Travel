import axios from "axios";

const client = axios.create({
   baseURL: 'http://193.191.177.75:3300/users'
});

const signIn = async (email, password) => {
    const {data} = await client.get(`/${email}/${password}`);

    return data;
};

const signUp = async (username, email, password) => {

    const {data} = await client.get(`/${email}/${password}`);

    if(data.length !== 0) {
        throw new Error('Email already exists');
    }

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
