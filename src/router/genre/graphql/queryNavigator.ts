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
                type
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

export const QUERY_VOD_BY_ID = gql`
    query getVodById($vodId: String!) {
        vod(id: $vodId) {
            id
            title
            subtitle
            description
            genres {
                id
                name
            }
            images {
                href
                type
            }
            actors {
                id
                images {
                    href
                    type
                }
                name
            }
            seasons {
                id
                name
                episodes {
                    id
                    title
                    playDuration
                    episodeNumber
                    description
                    images {
                        href
                        type
                    }
                    playUrl
                }
            }
        }
    }
`;
