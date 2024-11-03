function toggleMenu() {
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    const hamburger = document.querySelector('.hamburger');

    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
}

const propertiesData = [
    {
        "id": 1,
        "name": "Studio Coffee",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tortor at ipsum efficitur, sed auctor ex dapibus. Proin non ante et ipsum tincidunt venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis ornare elit, luctus vestibulum arcu vehicula quis. In imperdiet quam interdum, cursus elit ac, congue neque. Mauris blandit eros sit amet tincidunt volutpat. Mauris auctor augue sit amet convallis egestas. Curabitur vitae scelerisque augue. Sed laoreet nunc ut molestie porta. Sed arcu massa, bibendum at purus ac, luctus pulvinar mi. Aliquam semper ligula et purus sagittis condimentum. Mauris volutpat velit sit amet risus sodales porta. Vivamus eget massa vel augue iaculis pharetra.\n\nPraesent vel tempus lorem. Integer eget imperdiet urna, et finibus tellus. Sed vehicula accumsan quam, ac congue sem. Curabitur mollis vestibulum dapibus. Integer et aliquet quam. Suspendisse lacinia quam id vulputate aliquet. Nulla facilisi. Donec accumsan pellentesque pretium. Nulla molestie purus mi, a scelerisque diam viverra eget. Vivamus efficitur, eros id venenatis tincidunt, dolor libero tempor eros, a mollis est augue non orci. Morbi malesuada imperdiet neque a accumsan. Maecenas euismod nibh vitae eleifend fringilla. Aenean consequat diam vestibulum, ultrices ante eu, gravida leo.\n\nSed dapibus dignissim urna, sit amet faucibus ante aliquet quis. Ut imperdiet efficitur ipsum, vel dapibus augue egestas eget. Nullam neque metus, porta eget est sit amet, posuere imperdiet sem. Sed vitae congue ante. Vivamus neque urna, bibendum vitae condimentum sed, iaculis ac mauris. Nullam eget pharetra diam, ut consectetur purus. Aliquam mi lorem, consequat sit amet magna nec, bibendum pellentesque massa. Cras hendrerit quam sed metus vestibulum, ac tincidunt justo egestas. Vestibulum sed erat purus. Morbi vehicula est et magna mattis sollicitudin.\n\nEtiam pellentesque sapien sit amet ante tincidunt cursus. Duis in magna vitae purus auctor sodales quis ut mi. Nam venenatis justo ac neque auctor, et molestie felis rhoncus. Ut nec sollicitudin enim, ac fringilla diam. Mauris dignissim, nibh nec aliquam elementum, risus lorem tempus orci, ut dapibus mauris leo at metus. Morbi sit amet nulla dapibus turpis tincidunt auctor. Nullam auctor id purus eu pulvinar. Curabitur tristique quam sit amet accumsan maximus. Quisque tortor felis, commodo ac ullamcorper non, semper ut ex. Nulla cursus eros ac faucibus vehicula. Suspendisse arcu ex, dapibus et maximus at, vulputate et tellus. In finibus nunc nec est venenatis, ac vestibulum sapien varius. Etiam tincidunt risus ac lacus efficitur sodales. Curabitur ultricies et purus a egestas.\n\nMorbi fringilla ornare enim, eu aliquam purus sagittis quis. Nam iaculis eu dolor non suscipit. Aenean eget tempus quam, et feugiat nisl. Suspendisse molestie ex augue, ac euismod nulla luctus in. Sed porttitor mi mollis, congue nisl quis, vestibulum est. Proin vulputate lorem et enim finibus, ut blandit nulla porta. Proin sed iaculis arcu. Donec suscipit et neque et sagittis. Vivamus quis magna finibus, blandit quam ac, ultrices magna. Cras vitae lorem enim. Phasellus eleifend magna sapien, sed maximus felis gravida semper. Aenean bibendum iaculis turpis varius tristique. Nulla pretium faucibus sagittis. Etiam orci nisl, cursus a ante a, mollis pharetra tellus.",
        "origin": "Columbia",
        "roastedIn": "Wicklow",
        "type": "Whole Bean",
        "caffinated": "yes",
        "featuredMedia": "https://halfmoonyoga.ie/wp-content/uploads/2023/11/Colombia.png",
        "otherMedia": [
            {
                "src": "https://i.etsystatic.com/12434689/r/il/114442/5167986792/il_1588xN.5167986792_q4vn.jpg",
                "type": "image"
            },
            {
                "src": "https://t4.ftcdn.net/jpg/02/91/73/39/360_F_291733984_oP3xyguAxTNQ0AM7dzrDCUgcPbkG71Vl.jpg",
                "type": "image"
            },
            {
                "src": "https://png.pngtree.com/thumb_back/fw800/background/20230912/pngtree-coffee-beans-on-a-wooden-table-surrounded-by-cup-image_13201096.png",
                "type": "image"
            }
        ]
    },
    {
        "id": 2,
        "name": "Badger & Dodo",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tortor at ipsum efficitur, sed auctor ex dapibus. Proin non ante et ipsum tincidunt venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis ornare elit, luctus vestibulum arcu vehicula quis. In imperdiet quam interdum, cursus elit ac, congue neque. Mauris blandit eros sit amet tincidunt volutpat. Mauris auctor augue sit amet convallis egestas. Curabitur vitae scelerisque augue. Sed laoreet nunc ut molestie porta. Sed arcu massa, bibendum at purus ac, luctus pulvinar mi. Aliquam semper ligula et purus sagittis condimentum. Mauris volutpat velit sit amet risus sodales porta. Vivamus eget massa vel augue iaculis pharetra.\n\nPraesent vel tempus lorem. Integer eget imperdiet urna, et finibus tellus. Sed vehicula accumsan quam, ac congue sem. Curabitur mollis vestibulum dapibus. Integer et aliquet quam. Suspendisse lacinia quam id vulputate aliquet. Nulla facilisi. Donec accumsan pellentesque pretium. Nulla molestie purus mi, a scelerisque diam viverra eget. Vivamus efficitur, eros id venenatis tincidunt, dolor libero tempor eros, a mollis est augue non orci. Morbi malesuada imperdiet neque a accumsan. Maecenas euismod nibh vitae eleifend fringilla. Aenean consequat diam vestibulum, ultrices ante eu, gravida leo.\n\nSed dapibus dignissim urna, sit amet faucibus ante aliquet quis. Ut imperdiet efficitur ipsum, vel dapibus augue egestas eget. Nullam neque metus, porta eget est sit amet, posuere imperdiet sem. Sed vitae congue ante. Vivamus neque urna, bibendum vitae condimentum sed, iaculis ac mauris. Nullam eget pharetra diam, ut consectetur purus. Aliquam mi lorem, consequat sit amet magna nec, bibendum pellentesque massa. Cras hendrerit quam sed metus vestibulum, ac tincidunt justo egestas. Vestibulum sed erat purus. Morbi vehicula est et magna mattis sollicitudin.\n\nEtiam pellentesque sapien sit amet ante tincidunt cursus. Duis in magna vitae purus auctor sodales quis ut mi. Nam venenatis justo ac neque auctor, et molestie felis rhoncus. Ut nec sollicitudin enim, ac fringilla diam. Mauris dignissim, nibh nec aliquam elementum, risus lorem tempus orci, ut dapibus mauris leo at metus. Morbi sit amet nulla dapibus turpis tincidunt auctor. Nullam auctor id purus eu pulvinar. Curabitur tristique quam sit amet accumsan maximus. Quisque tortor felis, commodo ac ullamcorper non, semper ut ex. Nulla cursus eros ac faucibus vehicula. Suspendisse arcu ex, dapibus et maximus at, vulputate et tellus. In finibus nunc nec est venenatis, ac vestibulum sapien varius. Etiam tincidunt risus ac lacus efficitur sodales. Curabitur ultricies et purus a egestas.\n\nMorbi fringilla ornare enim, eu aliquam purus sagittis quis. Nam iaculis eu dolor non suscipit. Aenean eget tempus quam, et feugiat nisl. Suspendisse molestie ex augue, ac euismod nulla luctus in. Sed porttitor mi mollis, congue nisl quis, vestibulum est. Proin vulputate lorem et enim finibus, ut blandit nulla porta. Proin sed iaculis arcu. Donec suscipit et neque et sagittis. Vivamus quis magna finibus, blandit quam ac, ultrices magna. Cras vitae lorem enim. Phasellus eleifend magna sapien, sed maximus felis gravida semper. Aenean bibendum iaculis turpis varius tristique. Nulla pretium faucibus sagittis. Etiam orci nisl, cursus a ante a, mollis pharetra tellus.",
        "origin": "Columbia",
        "roastedIn": "Cork",
        "type": "Whole Bean",
        "caffinated": "yes",
        "featuredMedia": "https://badgeranddodo.ie/wp-content/uploads/2021/09/IMG-3726-2048x1536.jpg",
        "otherMedia": [
            {
                "src": "https://i.etsystatic.com/12434689/r/il/114442/5167986792/il_1588xN.5167986792_q4vn.jpg",
                "type": "image"
            },
            {
                "src": "https://t4.ftcdn.net/jpg/02/91/73/39/360_F_291733984_oP3xyguAxTNQ0AM7dzrDCUgcPbkG71Vl.jpg",
                "type": "image"
            },
            {
                "src": "https://png.pngtree.com/thumb_back/fw800/background/20230912/pngtree-coffee-beans-on-a-wooden-table-surrounded-by-cup-image_13201096.png",
                "type": "image"
            }
        ]
    },
    {
        "id": 3,
        "name": "Studio Coffee",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tortor at ipsum efficitur, sed auctor ex dapibus. Proin non ante et ipsum tincidunt venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis ornare elit, luctus vestibulum arcu vehicula quis. In imperdiet quam interdum, cursus elit ac, congue neque. Mauris blandit eros sit amet tincidunt volutpat. Mauris auctor augue sit amet convallis egestas. Curabitur vitae scelerisque augue. Sed laoreet nunc ut molestie porta. Sed arcu massa, bibendum at purus ac, luctus pulvinar mi. Aliquam semper ligula et purus sagittis condimentum. Mauris volutpat velit sit amet risus sodales porta. Vivamus eget massa vel augue iaculis pharetra.\n\nPraesent vel tempus lorem. Integer eget imperdiet urna, et finibus tellus. Sed vehicula accumsan quam, ac congue sem. Curabitur mollis vestibulum dapibus. Integer et aliquet quam. Suspendisse lacinia quam id vulputate aliquet. Nulla facilisi. Donec accumsan pellentesque pretium. Nulla molestie purus mi, a scelerisque diam viverra eget. Vivamus efficitur, eros id venenatis tincidunt, dolor libero tempor eros, a mollis est augue non orci. Morbi malesuada imperdiet neque a accumsan. Maecenas euismod nibh vitae eleifend fringilla. Aenean consequat diam vestibulum, ultrices ante eu, gravida leo.\n\nSed dapibus dignissim urna, sit amet faucibus ante aliquet quis. Ut imperdiet efficitur ipsum, vel dapibus augue egestas eget. Nullam neque metus, porta eget est sit amet, posuere imperdiet sem. Sed vitae congue ante. Vivamus neque urna, bibendum vitae condimentum sed, iaculis ac mauris. Nullam eget pharetra diam, ut consectetur purus. Aliquam mi lorem, consequat sit amet magna nec, bibendum pellentesque massa. Cras hendrerit quam sed metus vestibulum, ac tincidunt justo egestas. Vestibulum sed erat purus. Morbi vehicula est et magna mattis sollicitudin.\n\nEtiam pellentesque sapien sit amet ante tincidunt cursus. Duis in magna vitae purus auctor sodales quis ut mi. Nam venenatis justo ac neque auctor, et molestie felis rhoncus. Ut nec sollicitudin enim, ac fringilla diam. Mauris dignissim, nibh nec aliquam elementum, risus lorem tempus orci, ut dapibus mauris leo at metus. Morbi sit amet nulla dapibus turpis tincidunt auctor. Nullam auctor id purus eu pulvinar. Curabitur tristique quam sit amet accumsan maximus. Quisque tortor felis, commodo ac ullamcorper non, semper ut ex. Nulla cursus eros ac faucibus vehicula. Suspendisse arcu ex, dapibus et maximus at, vulputate et tellus. In finibus nunc nec est venenatis, ac vestibulum sapien varius. Etiam tincidunt risus ac lacus efficitur sodales. Curabitur ultricies et purus a egestas.\n\nMorbi fringilla ornare enim, eu aliquam purus sagittis quis. Nam iaculis eu dolor non suscipit. Aenean eget tempus quam, et feugiat nisl. Suspendisse molestie ex augue, ac euismod nulla luctus in. Sed porttitor mi mollis, congue nisl quis, vestibulum est. Proin vulputate lorem et enim finibus, ut blandit nulla porta. Proin sed iaculis arcu. Donec suscipit et neque et sagittis. Vivamus quis magna finibus, blandit quam ac, ultrices magna. Cras vitae lorem enim. Phasellus eleifend magna sapien, sed maximus felis gravida semper. Aenean bibendum iaculis turpis varius tristique. Nulla pretium faucibus sagittis. Etiam orci nisl, cursus a ante a, mollis pharetra tellus.",
        "origin": "Columbia",
        "roastedIn": "Wicklow",
        "type": "Ground",
        "caffinated": "yes",
        "featuredMedia": "https://halfmoonyoga.ie/wp-content/uploads/2023/11/Colombia.png",
        "otherMedia": [
            {
                "src": "https://i.etsystatic.com/12434689/r/il/114442/5167986792/il_1588xN.5167986792_q4vn.jpg",
                "type": "image"
            },
            {
                "src": "https://t4.ftcdn.net/jpg/02/91/73/39/360_F_291733984_oP3xyguAxTNQ0AM7dzrDCUgcPbkG71Vl.jpg",
                "type": "image"
            },
            {
                "src": "https://png.pngtree.com/thumb_back/fw800/background/20230912/pngtree-coffee-beans-on-a-wooden-table-surrounded-by-cup-image_13201096.png",
                "type": "image"
            }
        ]
    },
    {
        "id": 4,
        "name": "Badger & Dodo",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tortor at ipsum efficitur, sed auctor ex dapibus. Proin non ante et ipsum tincidunt venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis ornare elit, luctus vestibulum arcu vehicula quis. In imperdiet quam interdum, cursus elit ac, congue neque. Mauris blandit eros sit amet tincidunt volutpat. Mauris auctor augue sit amet convallis egestas. Curabitur vitae scelerisque augue. Sed laoreet nunc ut molestie porta. Sed arcu massa, bibendum at purus ac, luctus pulvinar mi. Aliquam semper ligula et purus sagittis condimentum. Mauris volutpat velit sit amet risus sodales porta. Vivamus eget massa vel augue iaculis pharetra.\n\nPraesent vel tempus lorem. Integer eget imperdiet urna, et finibus tellus. Sed vehicula accumsan quam, ac congue sem. Curabitur mollis vestibulum dapibus. Integer et aliquet quam. Suspendisse lacinia quam id vulputate aliquet. Nulla facilisi. Donec accumsan pellentesque pretium. Nulla molestie purus mi, a scelerisque diam viverra eget. Vivamus efficitur, eros id venenatis tincidunt, dolor libero tempor eros, a mollis est augue non orci. Morbi malesuada imperdiet neque a accumsan. Maecenas euismod nibh vitae eleifend fringilla. Aenean consequat diam vestibulum, ultrices ante eu, gravida leo.\n\nSed dapibus dignissim urna, sit amet faucibus ante aliquet quis. Ut imperdiet efficitur ipsum, vel dapibus augue egestas eget. Nullam neque metus, porta eget est sit amet, posuere imperdiet sem. Sed vitae congue ante. Vivamus neque urna, bibendum vitae condimentum sed, iaculis ac mauris. Nullam eget pharetra diam, ut consectetur purus. Aliquam mi lorem, consequat sit amet magna nec, bibendum pellentesque massa. Cras hendrerit quam sed metus vestibulum, ac tincidunt justo egestas. Vestibulum sed erat purus. Morbi vehicula est et magna mattis sollicitudin.\n\nEtiam pellentesque sapien sit amet ante tincidunt cursus. Duis in magna vitae purus auctor sodales quis ut mi. Nam venenatis justo ac neque auctor, et molestie felis rhoncus. Ut nec sollicitudin enim, ac fringilla diam. Mauris dignissim, nibh nec aliquam elementum, risus lorem tempus orci, ut dapibus mauris leo at metus. Morbi sit amet nulla dapibus turpis tincidunt auctor. Nullam auctor id purus eu pulvinar. Curabitur tristique quam sit amet accumsan maximus. Quisque tortor felis, commodo ac ullamcorper non, semper ut ex. Nulla cursus eros ac faucibus vehicula. Suspendisse arcu ex, dapibus et maximus at, vulputate et tellus. In finibus nunc nec est venenatis, ac vestibulum sapien varius. Etiam tincidunt risus ac lacus efficitur sodales. Curabitur ultricies et purus a egestas.\n\nMorbi fringilla ornare enim, eu aliquam purus sagittis quis. Nam iaculis eu dolor non suscipit. Aenean eget tempus quam, et feugiat nisl. Suspendisse molestie ex augue, ac euismod nulla luctus in. Sed porttitor mi mollis, congue nisl quis, vestibulum est. Proin vulputate lorem et enim finibus, ut blandit nulla porta. Proin sed iaculis arcu. Donec suscipit et neque et sagittis. Vivamus quis magna finibus, blandit quam ac, ultrices magna. Cras vitae lorem enim. Phasellus eleifend magna sapien, sed maximus felis gravida semper. Aenean bibendum iaculis turpis varius tristique. Nulla pretium faucibus sagittis. Etiam orci nisl, cursus a ante a, mollis pharetra tellus.",
        "origin": "Columbia",
        "roastedIn": "Cork",
        "type": "Ground",
        "caffinated": "yes",
        "featuredMedia": "https://badgeranddodo.ie/wp-content/uploads/2021/09/IMG-3726-2048x1536.jpg",
        "otherMedia": [
            {
                "src": "https://i.etsystatic.com/12434689/r/il/114442/5167986792/il_1588xN.5167986792_q4vn.jpg",
                "type": "image"
            },
            {
                "src": "https://t4.ftcdn.net/jpg/02/91/73/39/360_F_291733984_oP3xyguAxTNQ0AM7dzrDCUgcPbkG71Vl.jpg",
                "type": "image"
            },
            {
                "src": "https://png.pngtree.com/thumb_back/fw800/background/20230912/pngtree-coffee-beans-on-a-wooden-table-surrounded-by-cup-image_13201096.png",
                "type": "image"
            }
        ]
    },
    {
        "id": 5,
        "name": "Studio Coffee",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tortor at ipsum efficitur, sed auctor ex dapibus. Proin non ante et ipsum tincidunt venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis ornare elit, luctus vestibulum arcu vehicula quis. In imperdiet quam interdum, cursus elit ac, congue neque. Mauris blandit eros sit amet tincidunt volutpat. Mauris auctor augue sit amet convallis egestas. Curabitur vitae scelerisque augue. Sed laoreet nunc ut molestie porta. Sed arcu massa, bibendum at purus ac, luctus pulvinar mi. Aliquam semper ligula et purus sagittis condimentum. Mauris volutpat velit sit amet risus sodales porta. Vivamus eget massa vel augue iaculis pharetra.\n\nPraesent vel tempus lorem. Integer eget imperdiet urna, et finibus tellus. Sed vehicula accumsan quam, ac congue sem. Curabitur mollis vestibulum dapibus. Integer et aliquet quam. Suspendisse lacinia quam id vulputate aliquet. Nulla facilisi. Donec accumsan pellentesque pretium. Nulla molestie purus mi, a scelerisque diam viverra eget. Vivamus efficitur, eros id venenatis tincidunt, dolor libero tempor eros, a mollis est augue non orci. Morbi malesuada imperdiet neque a accumsan. Maecenas euismod nibh vitae eleifend fringilla. Aenean consequat diam vestibulum, ultrices ante eu, gravida leo.\n\nSed dapibus dignissim urna, sit amet faucibus ante aliquet quis. Ut imperdiet efficitur ipsum, vel dapibus augue egestas eget. Nullam neque metus, porta eget est sit amet, posuere imperdiet sem. Sed vitae congue ante. Vivamus neque urna, bibendum vitae condimentum sed, iaculis ac mauris. Nullam eget pharetra diam, ut consectetur purus. Aliquam mi lorem, consequat sit amet magna nec, bibendum pellentesque massa. Cras hendrerit quam sed metus vestibulum, ac tincidunt justo egestas. Vestibulum sed erat purus. Morbi vehicula est et magna mattis sollicitudin.\n\nEtiam pellentesque sapien sit amet ante tincidunt cursus. Duis in magna vitae purus auctor sodales quis ut mi. Nam venenatis justo ac neque auctor, et molestie felis rhoncus. Ut nec sollicitudin enim, ac fringilla diam. Mauris dignissim, nibh nec aliquam elementum, risus lorem tempus orci, ut dapibus mauris leo at metus. Morbi sit amet nulla dapibus turpis tincidunt auctor. Nullam auctor id purus eu pulvinar. Curabitur tristique quam sit amet accumsan maximus. Quisque tortor felis, commodo ac ullamcorper non, semper ut ex. Nulla cursus eros ac faucibus vehicula. Suspendisse arcu ex, dapibus et maximus at, vulputate et tellus. In finibus nunc nec est venenatis, ac vestibulum sapien varius. Etiam tincidunt risus ac lacus efficitur sodales. Curabitur ultricies et purus a egestas.\n\nMorbi fringilla ornare enim, eu aliquam purus sagittis quis. Nam iaculis eu dolor non suscipit. Aenean eget tempus quam, et feugiat nisl. Suspendisse molestie ex augue, ac euismod nulla luctus in. Sed porttitor mi mollis, congue nisl quis, vestibulum est. Proin vulputate lorem et enim finibus, ut blandit nulla porta. Proin sed iaculis arcu. Donec suscipit et neque et sagittis. Vivamus quis magna finibus, blandit quam ac, ultrices magna. Cras vitae lorem enim. Phasellus eleifend magna sapien, sed maximus felis gravida semper. Aenean bibendum iaculis turpis varius tristique. Nulla pretium faucibus sagittis. Etiam orci nisl, cursus a ante a, mollis pharetra tellus.",
        "origin": "Columbia",
        "roastedIn": "Wicklow",
        "type": "Ground",
        "caffinated": "no",
        "featuredMedia": "https://halfmoonyoga.ie/wp-content/uploads/2023/11/Colombia.png",
        "otherMedia": [
            {
                "src": "https://i.etsystatic.com/12434689/r/il/114442/5167986792/il_1588xN.5167986792_q4vn.jpg",
                "type": "image"
            },
            {
                "src": "https://t4.ftcdn.net/jpg/02/91/73/39/360_F_291733984_oP3xyguAxTNQ0AM7dzrDCUgcPbkG71Vl.jpg",
                "type": "image"
            },
            {
                "src": "https://png.pngtree.com/thumb_back/fw800/background/20230912/pngtree-coffee-beans-on-a-wooden-table-surrounded-by-cup-image_13201096.png",
                "type": "image"
            }
        ]
    },
    {
        "id": 6,
        "name": "Badger & Dodo",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tortor at ipsum efficitur, sed auctor ex dapibus. Proin non ante et ipsum tincidunt venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis ornare elit, luctus vestibulum arcu vehicula quis. In imperdiet quam interdum, cursus elit ac, congue neque. Mauris blandit eros sit amet tincidunt volutpat. Mauris auctor augue sit amet convallis egestas. Curabitur vitae scelerisque augue. Sed laoreet nunc ut molestie porta. Sed arcu massa, bibendum at purus ac, luctus pulvinar mi. Aliquam semper ligula et purus sagittis condimentum. Mauris volutpat velit sit amet risus sodales porta. Vivamus eget massa vel augue iaculis pharetra.\n\nPraesent vel tempus lorem. Integer eget imperdiet urna, et finibus tellus. Sed vehicula accumsan quam, ac congue sem. Curabitur mollis vestibulum dapibus. Integer et aliquet quam. Suspendisse lacinia quam id vulputate aliquet. Nulla facilisi. Donec accumsan pellentesque pretium. Nulla molestie purus mi, a scelerisque diam viverra eget. Vivamus efficitur, eros id venenatis tincidunt, dolor libero tempor eros, a mollis est augue non orci. Morbi malesuada imperdiet neque a accumsan. Maecenas euismod nibh vitae eleifend fringilla. Aenean consequat diam vestibulum, ultrices ante eu, gravida leo.\n\nSed dapibus dignissim urna, sit amet faucibus ante aliquet quis. Ut imperdiet efficitur ipsum, vel dapibus augue egestas eget. Nullam neque metus, porta eget est sit amet, posuere imperdiet sem. Sed vitae congue ante. Vivamus neque urna, bibendum vitae condimentum sed, iaculis ac mauris. Nullam eget pharetra diam, ut consectetur purus. Aliquam mi lorem, consequat sit amet magna nec, bibendum pellentesque massa. Cras hendrerit quam sed metus vestibulum, ac tincidunt justo egestas. Vestibulum sed erat purus. Morbi vehicula est et magna mattis sollicitudin.\n\nEtiam pellentesque sapien sit amet ante tincidunt cursus. Duis in magna vitae purus auctor sodales quis ut mi. Nam venenatis justo ac neque auctor, et molestie felis rhoncus. Ut nec sollicitudin enim, ac fringilla diam. Mauris dignissim, nibh nec aliquam elementum, risus lorem tempus orci, ut dapibus mauris leo at metus. Morbi sit amet nulla dapibus turpis tincidunt auctor. Nullam auctor id purus eu pulvinar. Curabitur tristique quam sit amet accumsan maximus. Quisque tortor felis, commodo ac ullamcorper non, semper ut ex. Nulla cursus eros ac faucibus vehicula. Suspendisse arcu ex, dapibus et maximus at, vulputate et tellus. In finibus nunc nec est venenatis, ac vestibulum sapien varius. Etiam tincidunt risus ac lacus efficitur sodales. Curabitur ultricies et purus a egestas.\n\nMorbi fringilla ornare enim, eu aliquam purus sagittis quis. Nam iaculis eu dolor non suscipit. Aenean eget tempus quam, et feugiat nisl. Suspendisse molestie ex augue, ac euismod nulla luctus in. Sed porttitor mi mollis, congue nisl quis, vestibulum est. Proin vulputate lorem et enim finibus, ut blandit nulla porta. Proin sed iaculis arcu. Donec suscipit et neque et sagittis. Vivamus quis magna finibus, blandit quam ac, ultrices magna. Cras vitae lorem enim. Phasellus eleifend magna sapien, sed maximus felis gravida semper. Aenean bibendum iaculis turpis varius tristique. Nulla pretium faucibus sagittis. Etiam orci nisl, cursus a ante a, mollis pharetra tellus.",
        "origin": "Columbia",
        "roastedIn": "Cork",
        "type": "Ground",
        "caffinated": "no",
        "featuredMedia": "https://badgeranddodo.ie/wp-content/uploads/2021/09/IMG-3726-2048x1536.jpg",
        "otherMedia": [
            {
                "src": "https://i.etsystatic.com/12434689/r/il/114442/5167986792/il_1588xN.5167986792_q4vn.jpg",
                "type": "image"
            },
            {
                "src": "https://t4.ftcdn.net/jpg/02/91/73/39/360_F_291733984_oP3xyguAxTNQ0AM7dzrDCUgcPbkG71Vl.jpg",
                "type": "image"
            },
            {
                "src": "https://png.pngtree.com/thumb_back/fw800/background/20230912/pngtree-coffee-beans-on-a-wooden-table-surrounded-by-cup-image_13201096.png",
                "type": "image"
            }
        ]
    },
    {
        "id": 7,
        "name": "Studio Coffee",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tortor at ipsum efficitur, sed auctor ex dapibus. Proin non ante et ipsum tincidunt venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis ornare elit, luctus vestibulum arcu vehicula quis. In imperdiet quam interdum, cursus elit ac, congue neque. Mauris blandit eros sit amet tincidunt volutpat. Mauris auctor augue sit amet convallis egestas. Curabitur vitae scelerisque augue. Sed laoreet nunc ut molestie porta. Sed arcu massa, bibendum at purus ac, luctus pulvinar mi. Aliquam semper ligula et purus sagittis condimentum. Mauris volutpat velit sit amet risus sodales porta. Vivamus eget massa vel augue iaculis pharetra.\n\nPraesent vel tempus lorem. Integer eget imperdiet urna, et finibus tellus. Sed vehicula accumsan quam, ac congue sem. Curabitur mollis vestibulum dapibus. Integer et aliquet quam. Suspendisse lacinia quam id vulputate aliquet. Nulla facilisi. Donec accumsan pellentesque pretium. Nulla molestie purus mi, a scelerisque diam viverra eget. Vivamus efficitur, eros id venenatis tincidunt, dolor libero tempor eros, a mollis est augue non orci. Morbi malesuada imperdiet neque a accumsan. Maecenas euismod nibh vitae eleifend fringilla. Aenean consequat diam vestibulum, ultrices ante eu, gravida leo.\n\nSed dapibus dignissim urna, sit amet faucibus ante aliquet quis. Ut imperdiet efficitur ipsum, vel dapibus augue egestas eget. Nullam neque metus, porta eget est sit amet, posuere imperdiet sem. Sed vitae congue ante. Vivamus neque urna, bibendum vitae condimentum sed, iaculis ac mauris. Nullam eget pharetra diam, ut consectetur purus. Aliquam mi lorem, consequat sit amet magna nec, bibendum pellentesque massa. Cras hendrerit quam sed metus vestibulum, ac tincidunt justo egestas. Vestibulum sed erat purus. Morbi vehicula est et magna mattis sollicitudin.\n\nEtiam pellentesque sapien sit amet ante tincidunt cursus. Duis in magna vitae purus auctor sodales quis ut mi. Nam venenatis justo ac neque auctor, et molestie felis rhoncus. Ut nec sollicitudin enim, ac fringilla diam. Mauris dignissim, nibh nec aliquam elementum, risus lorem tempus orci, ut dapibus mauris leo at metus. Morbi sit amet nulla dapibus turpis tincidunt auctor. Nullam auctor id purus eu pulvinar. Curabitur tristique quam sit amet accumsan maximus. Quisque tortor felis, commodo ac ullamcorper non, semper ut ex. Nulla cursus eros ac faucibus vehicula. Suspendisse arcu ex, dapibus et maximus at, vulputate et tellus. In finibus nunc nec est venenatis, ac vestibulum sapien varius. Etiam tincidunt risus ac lacus efficitur sodales. Curabitur ultricies et purus a egestas.\n\nMorbi fringilla ornare enim, eu aliquam purus sagittis quis. Nam iaculis eu dolor non suscipit. Aenean eget tempus quam, et feugiat nisl. Suspendisse molestie ex augue, ac euismod nulla luctus in. Sed porttitor mi mollis, congue nisl quis, vestibulum est. Proin vulputate lorem et enim finibus, ut blandit nulla porta. Proin sed iaculis arcu. Donec suscipit et neque et sagittis. Vivamus quis magna finibus, blandit quam ac, ultrices magna. Cras vitae lorem enim. Phasellus eleifend magna sapien, sed maximus felis gravida semper. Aenean bibendum iaculis turpis varius tristique. Nulla pretium faucibus sagittis. Etiam orci nisl, cursus a ante a, mollis pharetra tellus.",
        "origin": "Columbia",
        "roastedIn": "Wicklow",
        "type": "Whole Bean",
        "caffinated": "no",
        "featuredMedia": "https://halfmoonyoga.ie/wp-content/uploads/2023/11/Colombia.png",
        "otherMedia": [
            {
                "src": "https://i.etsystatic.com/12434689/r/il/114442/5167986792/il_1588xN.5167986792_q4vn.jpg",
                "type": "image"
            },
            {
                "src": "https://t4.ftcdn.net/jpg/02/91/73/39/360_F_291733984_oP3xyguAxTNQ0AM7dzrDCUgcPbkG71Vl.jpg",
                "type": "image"
            },
            {
                "src": "https://png.pngtree.com/thumb_back/fw800/background/20230912/pngtree-coffee-beans-on-a-wooden-table-surrounded-by-cup-image_13201096.png",
                "type": "image"
            }
        ]
    },
    {
        "id": 8,
        "name": "Badger & Dodo",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate tortor at ipsum efficitur, sed auctor ex dapibus. Proin non ante et ipsum tincidunt venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis ornare elit, luctus vestibulum arcu vehicula quis. In imperdiet quam interdum, cursus elit ac, congue neque. Mauris blandit eros sit amet tincidunt volutpat. Mauris auctor augue sit amet convallis egestas. Curabitur vitae scelerisque augue. Sed laoreet nunc ut molestie porta. Sed arcu massa, bibendum at purus ac, luctus pulvinar mi. Aliquam semper ligula et purus sagittis condimentum. Mauris volutpat velit sit amet risus sodales porta. Vivamus eget massa vel augue iaculis pharetra.\n\nPraesent vel tempus lorem. Integer eget imperdiet urna, et finibus tellus. Sed vehicula accumsan quam, ac congue sem. Curabitur mollis vestibulum dapibus. Integer et aliquet quam. Suspendisse lacinia quam id vulputate aliquet. Nulla facilisi. Donec accumsan pellentesque pretium. Nulla molestie purus mi, a scelerisque diam viverra eget. Vivamus efficitur, eros id venenatis tincidunt, dolor libero tempor eros, a mollis est augue non orci. Morbi malesuada imperdiet neque a accumsan. Maecenas euismod nibh vitae eleifend fringilla. Aenean consequat diam vestibulum, ultrices ante eu, gravida leo.\n\nSed dapibus dignissim urna, sit amet faucibus ante aliquet quis. Ut imperdiet efficitur ipsum, vel dapibus augue egestas eget. Nullam neque metus, porta eget est sit amet, posuere imperdiet sem. Sed vitae congue ante. Vivamus neque urna, bibendum vitae condimentum sed, iaculis ac mauris. Nullam eget pharetra diam, ut consectetur purus. Aliquam mi lorem, consequat sit amet magna nec, bibendum pellentesque massa. Cras hendrerit quam sed metus vestibulum, ac tincidunt justo egestas. Vestibulum sed erat purus. Morbi vehicula est et magna mattis sollicitudin.\n\nEtiam pellentesque sapien sit amet ante tincidunt cursus. Duis in magna vitae purus auctor sodales quis ut mi. Nam venenatis justo ac neque auctor, et molestie felis rhoncus. Ut nec sollicitudin enim, ac fringilla diam. Mauris dignissim, nibh nec aliquam elementum, risus lorem tempus orci, ut dapibus mauris leo at metus. Morbi sit amet nulla dapibus turpis tincidunt auctor. Nullam auctor id purus eu pulvinar. Curabitur tristique quam sit amet accumsan maximus. Quisque tortor felis, commodo ac ullamcorper non, semper ut ex. Nulla cursus eros ac faucibus vehicula. Suspendisse arcu ex, dapibus et maximus at, vulputate et tellus. In finibus nunc nec est venenatis, ac vestibulum sapien varius. Etiam tincidunt risus ac lacus efficitur sodales. Curabitur ultricies et purus a egestas.\n\nMorbi fringilla ornare enim, eu aliquam purus sagittis quis. Nam iaculis eu dolor non suscipit. Aenean eget tempus quam, et feugiat nisl. Suspendisse molestie ex augue, ac euismod nulla luctus in. Sed porttitor mi mollis, congue nisl quis, vestibulum est. Proin vulputate lorem et enim finibus, ut blandit nulla porta. Proin sed iaculis arcu. Donec suscipit et neque et sagittis. Vivamus quis magna finibus, blandit quam ac, ultrices magna. Cras vitae lorem enim. Phasellus eleifend magna sapien, sed maximus felis gravida semper. Aenean bibendum iaculis turpis varius tristique. Nulla pretium faucibus sagittis. Etiam orci nisl, cursus a ante a, mollis pharetra tellus.",
        "origin": "Columbia",
        "roastedIn": "Cork",
        "type": "Whole Bean",
        "caffinated": "no",
        "featuredMedia": "https://badgeranddodo.ie/wp-content/uploads/2021/09/IMG-3726-2048x1536.jpg",
        "otherMedia": [
            {
                "src": "https://i.etsystatic.com/12434689/r/il/114442/5167986792/il_1588xN.5167986792_q4vn.jpg",
                "type": "image"
            },
            {
                "src": "https://t4.ftcdn.net/jpg/02/91/73/39/360_F_291733984_oP3xyguAxTNQ0AM7dzrDCUgcPbkG71Vl.jpg",
                "type": "image"
            },
            {
                "src": "https://png.pngtree.com/thumb_back/fw800/background/20230912/pngtree-coffee-beans-on-a-wooden-table-surrounded-by-cup-image_13201096.png",
                "type": "image"
            }
        ]
    }
];

// Function to render properties
function renderProperties(data) {
    const propertiesContainer = document.querySelector('.properties');
    propertiesContainer.innerHTML = ''; // Clear existing content

    data.forEach(property => {
        // Create a card element
        const card = document.createElement('div');
        card.className = 'property-card';

        // Card HTML structure
        card.innerHTML = `
              <img src="${property.featuredMedia}" alt="${property.name}" class="property-image">
              <div class="property-info">
                  <h3>${property.name}</h3>
                  <p>${property.description.substring(0, 100)}...</p>
                  <p><strong>Origin:</strong> ${property.origin}</p>
                  <p><strong>Roasted In:</strong> ${property.roastedIn}</p>
                  <p><strong>Type:</strong> ${property.type}</p>
                  <p><strong>Caffeinated:</strong> ${property.caffinated}</p>
                  <button onclick="viewDetails(${property.id})">View More</button>
              </div>
          `;

        // Append card to the container
        propertiesContainer.appendChild(card);
    });
}

function viewDetails(propertyId) {
    // Find the property by ID
    const selectedProperty = propertiesData.find(property => property.id === propertyId);
    
    // Store the selected property in sessionStorage
    sessionStorage.setItem('selectedProperty', JSON.stringify(selectedProperty));
    
    // Navigate to details page
    window.location.href = 'details.html';
}

// Call the function to render properties
renderProperties(propertiesData);

function openModal() {
    document.getElementById('bookingModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

function submitBooking(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    alert(`Thank you, ${name}! Your viewing has been booked.`);
    closeModal();
    document.getElementById('bookingForm').reset();
}


// Function to search properties
function searchProperties() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    // Filter properties based on the search query
    const filteredProperties = propertiesData.filter(property => 
        property.name.toLowerCase().includes(query) || 
        property.description.toLowerCase().includes(query)
    );
    
    // Render filtered properties
    renderProperties(filteredProperties);
}

// Initial rendering of properties
renderProperties(propertiesData);