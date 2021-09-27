import auth from '../vuex/auth';
import projects from '~/vuex/projects';
import blogs from "~/vuex/blogs";
import account from '~/vuex/account';
import packages from '~/vuex/packages';
import help from '~/vuex/help';

export default {
    modules:{
        auth,
        projects,
        blogs,
        account,
        packages,
        help,
    }
}