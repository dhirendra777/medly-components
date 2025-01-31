import colors from '../colors';
import { AvatarTheme } from './types';

const avatar: AvatarTheme = {
    sizes: {
        S: {
            avatarSize: '3.2rem',
            fontSize: '1.4rem'
        },
        M: {
            avatarSize: '4rem',
            fontSize: '1.6rem'
        },
        L: {
            avatarSize: '4.8rem',
            fontSize: '2rem'
        }
    },
    defaults: {
        size: 'M',
        textColor: colors.communityBlue[500],
        bgColor: colors.communityBlue[100],
        fontWeight: 'Regular',
        fontFamily: 'Open Sans',
        borderColor: colors.grey[200],
        hover: {
            textShadowColor: 'rgba(0, 90, 238, 0.35)',
            imgShadowColor: 'rgba(96, 120, 144, 0.35)',
            textColor: colors.white,
            bgColor: colors.communityBlue[400]
        }
    }
};

export default avatar;
