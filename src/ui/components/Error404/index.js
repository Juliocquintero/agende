const Error404 = ({ status, statusText }) => {
    return (
        <div>
            <h1>{`Error ${status ? status : "404"} ${statusText ? statusText : "Not Found"}`}</h1>
        </div>
    );
};

export default Error404;
