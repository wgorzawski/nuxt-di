import { Container } from 'nuxt-di';
import { $MyService } from '~/symbol';
import MyService from '~/services/myService';
import UserService from '~/services/userService';

const globalContainer = new Container();

globalContainer.registerClass($MyService, MyService);
globalContainer.registerClass('userService', UserService);

export default globalContainer;
