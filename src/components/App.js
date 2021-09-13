import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Main from './Main';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import InfoTooltip from './InfoTooltip';
import Register from './Register';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import api from '../utils/api';
import { AppContext } from '../contexts/AppContext';
import { appRoutes } from '../utils/constants';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const [isPopupProfileOpen, setIsPopupProfileOpen] = useState(false);
  const [isPopupCardOpen, setIsPopupCardOpen] = useState(false);
  const [isPopupAvatarOpen, setIsPopupAvatarOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [loggedIn, setLoggedIn] = useState(true);

  const handleButtonEditProfileClick = () => setIsPopupProfileOpen(true);
  const handleButtonAddCardClick = () => setIsPopupCardOpen(true);
  const handleButtonEditAvatarClick = () => setIsPopupAvatarOpen(true);

  const closeAllPopups = () => {
    setIsPopupProfileOpen(false);
    setIsPopupCardOpen(false);
    setIsPopupAvatarOpen(false);
    setSelectedCard(null);
  }

  useEffect(() => {
    const promises = [api.getUserInfo(), api.getInitialCards()];

    Promise.all(promises)
      .then(([userInfo, initialCards]) => {
        setCurrentUser(userInfo);
        setCards(initialCards);
      })
      .catch(err => console.log(err));
  }, []);

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    api.changeCardLikeStatus(card._id, isLiked)
      .then(newCard => {
        setCards(cards => cards.map(currCard => currCard._id === card._id ? newCard : currCard));
      })
      .catch(err => console.log(err));
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards.filter(currCard => currCard._id !== card._id))
      })
      .catch(err => console.log(err));
  }

  const handleUpdateUser = ({name, about}) => {
    api.setUserInfo(name, about)
    .then(userInfo => {
      setCurrentUser(userInfo);
      closeAllPopups();
    })
    .catch(err => console.log(err));
  }

  const handleUpdateAvatar = (avatar) => {
    api.setUserAvatar(avatar)
      .then(userInfo => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  const handleAddCard = ({name, link}) => {
    api.addCard(name, link)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  return (
    <AppContext.Provider value={{currentUser, loggedIn}}>
      <Switch>
        <ProtectedRoute
          exact
          path={appRoutes.root}
          loggedIn={loggedIn}
          cards={cards}
          onEditProfile={handleButtonEditProfileClick}
          onAddCard={handleButtonAddCardClick}
          onEditAvatar={handleButtonEditAvatarClick}
          onCardClick={setSelectedCard}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          component={Main}
        />
        <Route exact path={appRoutes.signUp}>
          {loggedIn ? <Redirect to={appRoutes.root} /> : <Register />}
        </Route>
        <Route exact path={appRoutes.signIn}>
          {loggedIn ? <Redirect to={appRoutes.root} /> : <Login />}
        </Route>
      </Switch>

      <EditProfilePopup
        isOpen={isPopupProfileOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <AddPlacePopup
        isOpen={isPopupCardOpen}
        onClose={closeAllPopups}
        onAddCard={handleAddCard}
      />

      <EditAvatarPopup
        isOpen={isPopupAvatarOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <InfoTooltip
        isOpen={isPopupAvatarOpen}
        onClose={closeAllPopups}
      />
    </AppContext.Provider>
  );
}

export default App;
