import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';

import { NavDropdown } from './menu-components';

const accountMenuItemsAuthenticated = () => (
  <>
    <NavDropdown icon="user" id="account-menu" data-cy="accountMenu">
      <MenuItem icon="wrench" to="/account/settings" data-cy="settings">
        Configurações
      </MenuItem>
      <MenuItem icon="lock" to="/account/password" data-cy="passwordItem">
        Senha
      </MenuItem>
      <MenuItem icon="sign-out-alt" to="/logout" data-cy="logout">
        Logout
      </MenuItem>
    </NavDropdown>
  </>
);

const accountMenuItems = () => <></>;

export const AccountMenu = ({ isAuthenticated = false }) => <>{isAuthenticated ? accountMenuItemsAuthenticated() : accountMenuItems()}</>;

export default AccountMenu;
