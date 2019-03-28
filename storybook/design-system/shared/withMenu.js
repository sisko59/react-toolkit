import { withStateHandlers } from 'recompose';

export const toggleMenu = ({ isOpen }) => () => ({ isOpen: !isOpen });

export default withStateHandlers(({ isOpen = true }) => ({ isOpen }), {
  toggleMenu
});
