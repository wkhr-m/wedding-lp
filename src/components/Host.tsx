import { Trans } from 'react-i18next';

function Host() {
  return (
    <section className='section host'>
      <img
        className='section_img'
        src={`${process.env.PUBLIC_URL}/host_title.png`}
        alt='Host'
      />
      <p className='host-item'>
        <div className='host-item_header'>
          <div
            className='host-item_img'
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/profile.jpeg)`,
            }}
          ></div>
          <div className='host-item_name'>
            Groom
            <br /> <Trans i18nKey={'groom-name'} />
          </div>
        </div>
        <div className='host-item_msg section-msg'>
          <Trans i18nKey={'groom-msg'} />
        </div>
      </p>
      <p className='host-item'>
        <div className='host-item_header'>
          <div className='host-item_name'>
            Bride
            <br /> <Trans i18nKey={'bride-name'} />
          </div>
          <div
            className='host-item_img'
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/profile.jpeg)`,
            }}
          ></div>
        </div>
        <div className='host-item_msg section-msg'>
          <Trans i18nKey={'bride-msg'} />
        </div>
      </p>
    </section>
  );
}

export default Host;
