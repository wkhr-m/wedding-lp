import { Trans } from 'react-i18next';

function SubMessage() {
  return (
    <section className='section'>
      <img
        className='section_img'
        src={`${process.env.PUBLIC_URL}/msg_title.png`}
        alt='reception'
      />
      <p className='section-msg'>
        <Trans i18nKey={'sub-msg'} />
      </p>
    </section>
  );
}

export default SubMessage;
