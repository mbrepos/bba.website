// Common interfaces and types used across components

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
    linkedin?: string;
}

export interface SocialLink {
    url: string;
    label: string;
    className?: string;
    style?: React.CSSProperties;
}

export interface NavItem {
    title: string;
    path?: string;
    external?: boolean;
    items?: {
        label: string;
        path: string;
        external?: boolean;
    }[];
    disabled?: boolean;
}

export interface FooterSection {
    title: string;
    titleLink?: string;
    links: {
        label: string;
        path: string;
        external?: boolean;
    }[];
}

export interface TeamCardProps {
    name: string;
    title: string;
    icon: string;
    linkden: string;  // Note: keeping the original spelling for compatibility
}

export interface TeamCardModalProps {
    show: boolean;
    onHide: () => void;
    name: string;
    title: string;
    bio?: string;
    image?: string;
}

export interface PartnerItemProps {
    href: string;
    src: string;
    alt: string;
    invert?: boolean;
}

// Add more interfaces as needed during component migration