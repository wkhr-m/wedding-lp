function Header() {
  return (
    <header className='header'>
      <div
        className='header_bgimg'
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/title-bgimg.jpg)`,
        }}
      />
      <img
        className='header_title'
        alt='Wedding Inbitaion'
        src={`${process.env.PUBLIC_URL}/title.svg`}
      ></img>
    </header>
  );
}

export default Header;
