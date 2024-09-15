import './Header.css'

const Header = () => {

    const date = new Date();
    return (
        <div className="Header">
            <h3>오늘의 일정</h3>
            <h1>{date.toString()}</h1>
        </div>
    );

};
export default Header;