import error from '../../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div className="h-[90vh] flex justify-center items-center">
            <img src={error} alt="Error Image is missing" />
        </div>
    );
};

export default ErrorPage;