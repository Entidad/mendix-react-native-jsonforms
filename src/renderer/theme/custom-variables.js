//import "../../themesource/nativeuiresources/native/custom-variables";


import { Appearance, Platform } from "react-native";
import { adjustFont, anyColorToRgbString, setContrastScale } from "../themesource/atlas_core/native/api";
import "./exclusion-variables";
/*

==> You can find a copy of the core variables below. (From styles/native/core/variables.js)
==> You can freely change any value in this file.
==> DO NOT change the core variable file (or any other file in core), as that makes updating Atlas a lot harder in the future.

*/
// == Global variables
// ## Variables to be used during styling
// -------------------------------------------------------------------------------------------------------------------//

// Dark Mode - Inherits OS theme if possible
export const darkMode               = Appearance.getColorScheme() === "dark";
//


// Brand Styles
export const brand = {
    primary                         : '#1A6251',
    primaryActive                   : '#57817C',
    primaryLight                    : "#CAE7E0", //bgPrimary
    primaryDisabled                 : "#BDD8D4",

    secondary                       : "#015D69",

    success                         : "#1DB710",
    successLight                    : "#D3EDD0",

    warning                         : "#DFCA11",
    warningLight                    : "#E8E4C3",

    danger                          : "#AE1C23",
    dangerLight                     : "#F1D4D5",

    info                            : "#015D69", //default
    infoLight                       : "#C0E0E4", //bg default
    
    elements                        : '#fff', // for darkmode use: darkMode ? '#0A1325' : '#fff',
    elementsSecondary               : '#fff',
    border                          : '#d4d4d4', // grayscale 100
    default                         : '#D4D4D4', // grayscale 100
    text                            : '#0A1325', // grayscale 900
    textSub                         : '#7C7C7C',

    textBlack                       : '#000'
};



//

// Background Colors
export const backgroundDefaults = {
    primaryLight                    : "#FFF",
    primaryDark                     : "#0A1325",
    secondaryLight                  : "#F8F8F8",
    secondaryDark                   : "#161F30"
};
export const background = {
    primary                         : backgroundDefaults.primaryLight, //darkMode ? backgroundDefaults.primaryDark : backgroundDefaults.primaryLight,
    secondary                       : backgroundDefaults.secondaryLight, //darkMode ? backgroundDefaults.secondaryDark : backgroundDefaults.secondaryLight,
    brandPrimary                    : brand.primary,
    brandSuccess                    : brand.success,
    brandWarning                    : brand.warning,
    brandDanger                     : brand.danger,
    brandInfo                       : brand.info
};
//
// Contrast (Gray) colors based on background.primary
export const contrast = {
    highest                         : setContrastScale(0.95, background.primary),
    higher                          : setContrastScale(0.8, background.primary),
    high                            : setContrastScale(0.65, background.primary),
    regular                         : setContrastScale(0.5, background.primary),
    low                             : setContrastScale(0.35, background.primary),
    lower                           : setContrastScale(0.2, background.primary),
    lowest                          : setContrastScale(0.05, background.primary)
};
//
// Border Style
export const border = {
    color                           : brand.border, //darkMode ? "#3B4251" : "#CED0D3",
    width                           : 1,
    radiusSmall                     : 4,
    radiusLarge                     : 8,
    radiusLargest                   : 9999
};
//
// Font Styles
export const fontDefaults = {
    colorTitleDark                  : brand.text,
    colorTitleLight                 : "#FDFDFD",
    colorParagraphDark              : brand.text,
    colorParagraphLight             : "#E7E7E9",
    colorDisabledDark               : "#9DA1A8",
    colorDisabledLight              : "#9DA1A8"
};



export const openSansFontFamily = { 
    bold        : "OpenSans-Bold",
    regular     : "OpenSans-Regular",
    semibold    : "OpenSans-SemiBold",
};
export const fontWeight = { 
    bold        : "bold",
    regular     : "regular",
    semibold    : "600",
};

export const font = { //fonts are defined in main.js
    size                            : adjustFont(14),
    sizeSmallest                    : adjustFont(10),
    sizeSmall                       : adjustFont(12),
    sizeLarge                       : adjustFont(14),
    sizeLargest                     : adjustFont(14),
    sizeH1                          : adjustFont(24),
    lineHeightH1                    : adjustFont(32),
    sizeH2                          : adjustFont(20),
    lineHeightH2                    : adjustFont(28),
    sizeH3                          : adjustFont(14),
    lineHeightH3                    : adjustFont(20),
    sizeH4                          : adjustFont(12),
    lineHeightH4                    : adjustFont(16),
    sizeH5                          : adjustFont(10),
    lineHeightH5                    : adjustFont(14),
    sizeH6                          : adjustFont(14),
    lineHeightH6                    : adjustFont(20),
    lineHeight                      : adjustFont(24),
    lineHeightSmallest              : adjustFont(19),
    lineHeightSmall                 : adjustFont(19),
    lineHeightLarge                 : adjustFont(19),
    lineHeightLargest               : adjustFont(19),
    colorTitle                      : brand.text,//darkMode ? fontDefaults.colorTitleLight : fontDefaults.colorTitleDark,
    colorParagraph                  : brand.text,//darkMode ? fontDefaults.colorParagraphLight : fontDefaults.colorParagraphDark,
    colorDisabled                   : brand.textSub,//darkMode ? fontDefaults.colorDisabledLight : fontDefaults.colorDisabledDark,
    weightLight                     : "100",
    weightNormal                    : "normal",
    weightSemiBold                  : "600",
    weightBold                      : "bold",
    family                          : Platform.select({ ios: openSansFontFamily.regular, android: openSansFontFamily.regular })
};



//
// Spacing
export const spacing = {
    smallest                        : 2,
    smaller                         : 4,
    small                           : 8,
    regular                         : 16,
    large                           : 24,
    larger                          : 32,
    largest                         : 40
};
//
// Button Styles
export const button = {
    // Start default styles
    container: {
        rippleColor                 : contrast.lowest,
        borderRadius                : border.radiusLarge,
        minWidth                    : 48,
        minHeight                   : 48,
        paddingVertical             : spacing.small,
        paddingHorizontal           : spacing.small
    },
    containerDisabled: {
        borderColor                 : border.color,
        backgroundColor             : border.color
    },
    icon: {
        size                        : font.size
    },
    iconDisabled: {
        color                       : font.colorDisabled
    },
    caption: {
        fontSize                    : font.sizeH4,
        fontWeight                  : font.weightNormal
    },
    captionDisabled: {
        color                       : font.colorDisabled
    },


    // End default styles

    header: {
        color                       : contrast.highest,
        borderColor                 : "transparent",
        backgroundColor             : "transparent",
        fontSize                    : font.sizeSmall,
        fontSizeIcon                : font.sizeSmall,
        paddingLeft                 : 0,
        paddingRight                : 10
    },
    primary: {
        color                       : "#FFF",
        borderColor                 : brand.primary,
        backgroundColor             : brand.primary
    },
    secondary: {
        color                       : brand.primary,
        borderColor                 : brand.primary,
        backgroundColor             : "transparent",
        inversedColor               : "#FFF"
    },
    success: {
        color                       : "#FFF",
        borderColor                 : brand.success,
        backgroundColor             : brand.success
    },
    warning: {
        color                       : "#FFF",
        borderColor                 : brand.warning,
        backgroundColor             : brand.warning
    },
    danger: {
        color                       : brand.danger,
        borderColor                 : brand.danger,
        backgroundColor             : brand.elements
    }
};

//
// Input Styles
export const input = {
    label: {
        numberOfLines               : 1,
        color                       : font.colorParagraph,
        fontSize                    : font.sizeSmall,
        'text-align'                : "left",
        'font-weight'               : fontWeight.semibold,
        fontFamily                  : openSansFontFamily.semibold,
    },
    labelDisabled: {
        color                       : font.colorTitle
    },
    input: {
        color                       : font.colorTitle,
        borderColor                 : contrast.lower,
        backgroundColor             : background.primary,
        selectionColor              : contrast.lower,
        placeholderTextColor        : contrast.low,
        fontSize                    : font.size,
        lineHeight                  : font.lineHeight,
        borderWidth                 : border.width,
        borderRadius                : border.radiusLarge,
        minWidth                    : 48,
        minHeight                   : 48,
        paddingVertical             : spacing.small,
        paddingHorizontal           : spacing.small
    },
    inputContainer: {
        underlayColor               : `rgba(${anyColorToRgbString(contrast.low)},0.4)`
    },
    inputDisabled: {
        color                       : font.colorDisabled,
        borderColor                 : border.color,
        backgroundColor             : background.secondary
    },
    inputError: {
        color                       : brand.danger,
        borderColor                 : brand.danger,
        placeholderTextColor        : brand.danger,
        backgroundColor             : brand.dangerLight
    },
    validationMessage: {
        color                       : brand.danger,
        fontSize                    : font.size
    },

    // Only used for the DropDown & ReferenceSelector
    valueContainer: {
        rippleColor                 : contrast.lowest
    },
    itemContainer: {
        paddingVertical             : 12,
        paddingHorizontal           : spacing.regular,
        backgroundColor             : background.primary
    },
    item: {
        color                       : font.colorTitle,
        fontSize                    : font.size
    },
    selectedItemContainer: {
        borderWidth                 : border.width,
        borderRadius                : border.radiusLarge,
        borderColor                 : brand.primary,
        backgroundColor             : "transparent"
    },
    selectedItem: {
        color                       : font.colorTitle,
        fontSize                    : font.size
    }
};
export const image = {
    image: {
        small                       : 24,
        medium                      : 40,
        large                       : 56,
        larger                      : 72
    },
    imageDisabled: {
        opacity                     : 0.6
    },
    icon                            : 16
};

//
// Navigation Styles
export const navigation = {
    statusBar: {
        backgroundColor             : background.primary,
        barStyle                    : "dark-content" //darkMode ? "light-content" : "dark-content"
    },
    topBar: {
        backgroundColor             : brand.primary,
        backButtonColor             : "#FFF",
        titleColor                  : "#FFF",
        titleFontSize               : font.sizeH6
    },
    bottomBar: {
        color                       : contrast.high,
        selectedTextColor           : brand.primary,
        selectedIconColor           : brand.primary,
        backgroundColor             : background.primary,
        fontSize                    : font.sizeSmall,
        iconSize                    : font.sizeSmall
    },
    progressOverlay: {
        color                       : font.colorTitle,
        activityIndicatorColor      : font.colorTitle,
        backgroundColor             : "rgba(0, 0, 0, 0.5)",
        containerBackgroundColor    : background.secondary,
        fontSize                    : font.size,
        borderRadius                : border.radiusSmall,
        elevation                   : 1.5,
        shadowColor                 : "#000",
        shadowOpacity               : 0.1,
        shadowRadius                : 10 // Only for iOS
    }
};
//
// Checkbox styles
export const checkbox = {
    checkboxInput: {
        color                       : brand.primary,
        size                        : 20,
        backgroundColor             : background.primary,
        borderColor                 : border.color,
        borderWidth                 : border.width,
        borderRadius                : border.radiusSmall,
        width                       : 40,
        height                      : 40
    },
    checkboxInputDisabled: {
        color                       : brand.primaryLight,
        backgroundColor             : background.secondary
    },
    checkboxInputError: {
        color                       : brand.danger,
        borderColor                 : brand.danger
    }
};
//
// Container Styles
export const container = {
    containerDisabled: {
        opacity                     : 0.6
    }
};
//
// Accordion Styles
export const accordion = {
    container: {
        backgroundColor             : background.primary,
        borderColor                 : border.color
    },
    groupHeader: {
        container: {
            paddingVertical         : spacing.regular,
            paddingHorizontal       : spacing.regular
        },
        heading: {
            color                   : font.colorTitle
        },
        icon: {
            size                    : font.sizeLarge,
            color                   : font.colorTitle
        }
    },
    groupContent: {
        paddingTop                  : spacing.small,
        paddingBottom               : spacing.large,
        paddingHorizontal           : spacing.regular
    }
};
//
// Badge Styles
export const badge = {
    fontWeight                      : font.weightNormal,
    borderRadius                    : border.radiusLarge,
    paddingVertical                 : spacing.smaller,
    paddingHorizontal               : spacing.small,
    default: {
        color                       : contrast.higher,
        backgroundColor             : contrast.lowest
    },
    primary: {
        color                       : brand.primary,
        backgroundColor             : brand.primaryLight
    },
    success: {
        color                       : brand.success,
        backgroundColor             : brand.successLight
    },
    warning: {
        //color                       : brand.warning,
        color                       : brand.textBlack,
        backgroundColor             : brand.warningLight
    },
    danger: {
        color                       : brand.danger,
        backgroundColor             : brand.dangerLight
    }
};
//
// Tabcontainer Styles
export const tabContainer = {
    tabBar: {
        pressColor                  : contrast.lower,
        backgroundColor             : 'transparent'
    },
    tab: {
        paddingVertical             : 12
    },
    indicator: {
        backgroundColor             : brand.primary,
        height                      : Platform.select({ ios: 5, android: 5 })
    },
    label: {
        color                       : fontDefaults.colorTitleDark,
        fontSize                    : font.size,
        fontWeight                  : font.weightSemiBold,
        textTransform               : "capitalize"
    },
    activeLabel: {
        color                       : brand.primary,
        fontSize                    : font.size,
        fontWeight                  : font.weightSemiBold,
        textTransform               : "capitalize"
    },
    badgeContainer: {
        borderRadius                : border.radiusLargest,
        backgroundColor             : badge.default.backgroundColor,
        paddingVertical             : spacing.smallest,
        paddingHorizontal           : spacing.small,
        marginLeft                  : 8
    },
    badgeCaption: {
        fontSize                    : font.size,
        color                       : badge.default.color,
        fontWeight                  : badge.fontWeight
    }
};
//
// ListView Styles
export const listView = {
    listItemDisabled: {
        opacity                     : 0.6
    },
    border: {
        color                       : border.color,
        width                       : border.width
    }
};
//
// Layoutgrid Styles
export const layoutGrid = {
    gutterSize                      : 16
};
//
//
// Floating Action Button Styles
export const floatingActionButton = {
    container: {
        margin                      : 30
    },
    button: {
        size                        : 50,
        rippleColor                 : contrast.lowest,
        borderColor                 : brand.primary,
        backgroundColor             : brand.primary
    },
    buttonIcon: {
        size                        : font.sizeLarge,
        color                       : contrast.lowest
    },
    secondaryButton: {
        size                        : 30,
        backgroundColor             : background.secondary
    },
    secondaryButtonIcon: {
        size                        : font.sizeSmall,
        color                       : contrast.high
    },
    secondaryButtonCaption: {
        color                       : contrast.high,
        fontSize                    : font.sizeSmall
    },
    secondaryButtonCaptionContainer: {
        backgroundColor             : background.primary
    }
};
//
// Intro Screen Styles
export const introScreen = {
    fullscreenContainer: {
        backgroundColor             : background.primary
    },
    popupContainer: {
        paddingVertical             : 150,
        paddingHorizontal           : 50,
        backgroundColor             : "rgba(0, 0, 0, 0.5)"
    },
    pagination: {
        text: {
            color                   : font.colorTitle,
            fontSize                : font.size
        },
        dotStyle: {
            size                    : spacing.small,
            backgroundColor         : contrast.lower
        },
        activeDotStyle: {
            size                    : spacing.small,
            backgroundColor         : font.colorTitle
        }
    },
    button: {
        icon: {
            color                   : font.colorTitle,
            size                    : button.icon.size
        },
        caption: {
            color                   : font.colorTitle,
            fontSize                : button.caption.fontSize,
            fontWeight              : font.weightBold,
            textTransform           : "uppercase",
            paddingHorizontal       : spacing.smallest
        }
    },
    buttonPaginationAbove: {
        container: {
            paddingVertical         : spacing.regular,
            backgroundColor         : button.primary.backgroundColor
        }
    }
};
//
// List View Swipe Styles
export const listViewSwipe = {
    leftAction: {
        panelSize                   : 160,
        panelSizeSmall              : 80,
        panelSizeLarge              : 240,
        backgroundColor             : background.primary
    },
    rightAction: {
        panelSize                   : 160,
        panelSizeSmall              : 80,
        panelSizeLarge              : 240,
        backgroundColor             : background.primary
    }
};
//
// Progress Bar Styles
export const progressBar = {
    bar: {
        height                      : 8,
        heightSmall                 : 4,
        heightLarge                 : 12,
        backgroundColor             : contrast.lowest
    },
    fill: {
        backgroundColor             : brand.primary
    }
};
//
// Progress Circle Styles
export const progressCircle = {
    circle: {
        size                        : 64
    },
    fill: {
        width                       : 4,
        lineCapRounded              : true,
        backgroundColor             : brand.primary
    },
    text: {
        color                       : contrast.regular,
        fontSize                    : font.size,
        fontWeight                  : font.weightSemiBold
    }
};
//
// Rating Styles
export const rating = {
    containerDisabled: {
        opacity                     : 0.5
    },
    icon: {
        size                        : 24,
        color                       : contrast.lower,
        selectedColor               : brand.warning
    }
};
//
// (Range)Slider styles
export const slider = {
    track: {
        height                      : 4,
        backgroundColor             : contrast.lowest
    },
    trackDisabled: {
        backgroundColor             : contrast.lower,
        opacity                     : 0.4
    },
    highlight: {
        backgroundColor             : brand.primary
    },
    highlightDisabled: {
        backgroundColor             : brand.primary
    },
    marker: {
        size                        : 24,
        borderColor                 : contrast.lowest,
        backgroundColor             : background.secondary
    },
    markerActive: {
        size                        : 32
    },
    markerDisabled: {
        size                        : 24,
        borderColor                 : contrast.lowest,
        backgroundColor             : background.secondary
    }
};

// Radio buttons styles
export const radioButtons = {
    labelTextStyle: {
        color                       : font.colorTitle,
        fontSize                    : font.sizeSmall,
        lineHeight                  : font.lineHeightSmall,
        marginBottom                : spacing.small
    },
    radioButtonItemContainerStyle: {
        marginBottom                : spacing.small
    },
    radioButtonItemContainerDisabledStyle: {
        opacity                     : 0.5
    },
    radioButtonItemContainerHorizontalStyle: {
        marginEnd                   : spacing.small
    },
    circularButtonStyle: {
        // width                       : 16,
        // height                      : 16,
        width                       : 32,
        height                      : 32,
        borderRadius                :32,
        borderColor                 : border.color,
        marginEnd                   : spacing.smaller
    },
    activeButtonStyle: {
        width                       : 8,
        height                      : 8,
        borderRadius                : 4,
        backgroundColor             : brand.primary
    },
    radioButtonItemTitleStyle: {
        color                       : font.colorParagraph,
        fontSize                    : font.size,
        lineHeight                  : font.lineHeight,
    },
    validationMessage: {
        color                       : brand.danger,
        fontSize                    : font.sizeSmall
    }
};


//
// Background gradient style
export const backgroundGradient = {
    container                       : {},
    angle                           : 0,
    opacity                         : 100
};
// column chart styles
export const columnChart = {
    container                       : {},
    errorMessage: {
        fontFamily                  : font.family,
        fontSize                    : font.sizeSmall,
        fontWeight                  : font.weightNormal
    },
    chart                           : {},
    grid: {
        lineColor                   : border.color
    },
    xAxis: {
        color                       : font.colorTitle,
        fontFamily                  : font.family,
        fontSize                    : font.sizeSmall,
        fontWeight                  : font.weightNormal,
        label: {
            color                   : font.colorParagraph,
            alignSelf               : "center",
            marginHorizontal        : 0,
            marginVertical          : 8,
            fontFamily              : font.family,
            fontSize                : font.sizeSmall,
            fontWeight              : font.weightNormal
        },
        lineColor                   : border.color
    },
    yAxis: {
        color                       : font.colorTitle,
        fontFamily                  : font.family,
        fontSize                    : font.sizeSmall,
        fontWeight                  : font.weightNormal,
        label: {
            color                   : font.colorParagraph,
            marginHorizontal        : 0,
            marginVertical          : 8,
            fontFamily              : font.family,
            fontSize                : font.sizeSmall,
            fontWeight              : font.weightNormal
        },
        lineColor                   : border.color
    },
    columns: {
        columnColorPalette          : Object.entries(brand)
            .reduce((accumulator, [key, value]) => (key.endsWith("Light") ? accumulator : [...accumulator, value]), [])
            .join(";"),
        columnsOffset               : 20,
        customColumnStyles: {
            your_static_or_dynamic_attribute_value: {
                column              : {},
                label               : {}
            }
        }
    },
    legend: {
        container: {
            justifyContent          : "flex-start",
            marginHorizontal        : 0,
            marginVertical          : spacing.small
        },
        item: {
            padding                 : 0,
            paddingRight            : spacing.regular
        },
        indicator: {
            marginRight             : spacing.small
        },
        label: {
            color                   : font.colorTitle,
            fontFamily              : font.family,
            fontSize                : font.sizeSmall,
            fontWeight              : font.weightNormal
        }
    }
};
// TODO add bar chart styles
// Gallery style
export const gallery = {
    container                       : {},
    emptyPlaceholder                : {},
    firstItem                       : {},
    lastItem                        : {},
    list                            : {},
    listItem                        : { flexGrow: 1 },
    loadMoreButtonContainer: {
        alignSelf                   : "stretch"
    },
    loadMoreButtonPressableContainer: {
        // Ripplecolor and all ViewStyle properties are allowed
        borderWidth                 : 1,
        borderStyle                 : "solid",
        rippleColor                 : button.container.rippleColor,
        borderColor                 : button.primary.borderColor,
        backgroundColor             : button.primary.backgroundColor,
        alignItems                  : "center",
        justifyContent              : "center",
        borderRadius                : button.container.borderRadius,
        minWidth                    : button.container.minWidth,
        minHeight                   : button.container.minHeight,
        paddingVertical             : button.container.paddingVertical,
        paddingHorizontal           : button.container.paddingHorizontal
    },
    loadMoreButtonCaption: {
        // All TextStyle properties are allowed
        color                       : button.primary.color,
        fontSize                    : button.caption.fontSize,
        fontFamily                  : font.family,
        fontWeight                  : button.caption.fontWeight,
        lineHeight                  : font.lineHeight
    }
};
// Gallery text filter style
export const galleryTextFilter = {
    textInputContainer: {
        flexDirection               : "row",
        justifyContent              : "space-between",
        borderWidth                 : input.input.borderWidth,
        borderColor                 : input.input.borderColor,
        borderRadius                : input.input.borderRadius,
        paddingEnd                  : 8
    },
    textInputContainerFocused: {
        borderColor                 : brand.primary
    },
    textInput: {
        height                      : 40,
        marginStart                 : spacing.regular,
        width                       : "90%",
        color                       : input.input.color,
        backgroundColor             : input.input.backgroundColor,
        selectionColor              : input.input.selectionColor,
        placeholderTextColor        : input.input.placeholderTextColor
    },
    textInputClearIcon: {
        justifyContent              : "center",
        alignContent                : "center"
    }
};
