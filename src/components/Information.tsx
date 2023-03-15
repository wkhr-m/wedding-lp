import { Trans } from 'react-i18next';

function Information() {
  return (
    <section className='section'>
      <img
        className='section_img'
        src={`${process.env.PUBLIC_URL}/information_title.png`}
        alt='information'
      />
      <p className='information'>
        <div>WEDDING CEREMONY</div>
        <div className=''>
          <Trans i18nKey={'information-title'} />
        </div>
        <div>2023.04.01 Sun</div>
        <div>
          <Trans i18nKey={'information1'} />
        </div>
        <div>
          <Trans i18nKey={'information2'} />
        </div>
        <div>
          <Trans i18nKey={'information3'} />
        </div>
        <div>
          <Trans i18nKey={'information4'} />
        </div>
        <hr />
      </p>
      <p className='information information-map'>
        <iframe
          className='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.824064522329!2d139.63835442484626!3d35.533345156855695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f107eb87583%3A0xf70371552cce6abc!2z6ba06KaL5bed5qi955S65YWs5ZyS!5e0!3m2!1sja!2sjp!4v1678851241566!5m2!1sja!2sjp'
          loading='lazy'
        ></iframe>
        <div>
          <Trans i18nKey={'place'} />
        </div>
      </p>
    </section>
  );
}

export default Information;
