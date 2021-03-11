import { gql } from '@apollo/client';

export const QUERY_NAVIGATOR = gql`
    query navigator($navigatorId: String!) {
        navigator(id: $navigatorId) {
            theme {
                colors
                metaInformation {
                    description
                    keywords
                    title
                }
            }
            contents {
                id
                coloredTitles {
                    title
                    color
                }
                laneTitle
                laneContentLink
                teasers {
                    id
                    title
                    subtitle
                    rate
                    trailerUrl
                    images {
                        href
                        type
                    }
                }
            }
        }
    }
`;

export default QUERY_NAVIGATOR;
