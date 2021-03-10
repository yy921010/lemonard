import { gql } from '@apollo/client';

export const QUERY_MENU = gql`
    query Menu {
        menu {
            id
            name
            images {
                href
                type
            }
        }
    }
`;

export default QUERY_MENU;
