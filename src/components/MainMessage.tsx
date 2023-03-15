import { Trans } from 'react-i18next';

function MainMessage() {
  return (
    <section className='section'>
      <img
        className='section_img'
        src={`${process.env.PUBLIC_URL}/reception_title.png`}
        alt='reception'
      />
      <p className='section-msg'>
        <Trans i18nKey={'main-msg'} />
      </p>
    </section>
  );
}

export default MainMessage;
