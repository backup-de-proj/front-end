const loginUser = (email, senha, onSucess, onError) => {

    setTimeout(() => {

        const error = true;
        if(error) {
            onError(new Error('erro em algo'));
        };

        console.log('logado');
        onSucess({ email });
    }, 1500);

};

const getVideo = (email, callback) => {
    setTimeout(() => {
        callback( 'video1', 'video2', 'video3' );
    });
};

const user = loginUser(
    'nada@gmail.com', 
    '12345', 

    (user) => {
    console.log({ user });

}, (error) => {
    console.log({ error });
});

// console.log({ user });
