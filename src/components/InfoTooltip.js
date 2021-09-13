import PropTypes from 'prop-types';

const InfoTooltip = () => {
  const { onClose } = props;

  return (
    <section className={`popup${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <p>Вы успешно зарегистрировались</p>
        <button className='button popup__button-close' type='button' aria-label='Закрыть' onClick={onClose}></button>
      </div>
    </section>
  );
}

InfoTooltip.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default InfoTooltip;
