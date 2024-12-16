import { Container } from 'nuxt-di';
import { $MyService } from '~/symbol';
import MyService from '~/services/myService';
import UserService from '~/services/userService';

const container = new Container();

container.registerClass($MyService, MyService);
container.registerClass('userService', UserService);

export default container;
