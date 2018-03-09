/// <reference types="googlemaps" />
/// <reference types="react" />

// import * as React from "react";

export type  formattedSuggestionType = {mainText: string, secundaryText: string};

export interface PropTypes {
    inputProps: {
        value: string;
        onChange: (value: string) => void;
        type?: string;
        placeholder?: string;
    };
    onError?: (status: string, clearSuggestion: () => void) => void;
    onSelect?: (address: string, placeID: string) => void;
    renderSuggestion: (suggestion: string, formattedSuggestion: formattedSuggestionType) => React.ReactNode;
    classNames?: {
        root?: string;
        input?: string;
        autocompleteContainer?: string;
        autocompleteItem?: string;
        autocompleteItemActive?: string;
    };
    // styles: PropTypes.shape({
    //     root: PropTypes.object,
    //     input: PropTypes.object,
    //     autocompleteContainer: PropTypes.object,
    //     autocompleteItem: PropTypes.object,
    //     autocompleteItemActive: PropTypes.object,
    // }),
    // options: PropTypes.shape({
    //     bounds: PropTypes.object,
    //     componentRestrictions: PropTypes.object,
    //     location: PropTypes.object,
    //     offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    //     radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    //     types: PropTypes.array,
    // }),
    debounce?: number;
    highlightFirstSuggestion?: boolean;
    renderFooter?: () => React.ReactNode;
    // shouldFetchSuggestions: PropTypes.func.isRequired,
}

export default class PlacesAutocomplete extends React.Component<PropTypes> {}
