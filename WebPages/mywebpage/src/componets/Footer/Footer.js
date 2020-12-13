import React from 'react';
import{FaFacebook,FaInstagram,FaYoutube} from 'react-icons/fa';
import {Button} from '../../globalStyles';
import { 
    FooterContainer,
    FooterSubHeading,
    FooterSubscription,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    WebSiteRights,
    SocialIcon,
    SocialLogo,
    SocialMedia,
    SocialIconsLink,
    SocialMediaWrap,
    SocialIcons
} from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join us exclusive membership to receive the lastest news and trends 
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="your Email"/>
                    <Button fontBig>
                        Subscribe
                    </Button>

                    
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            About Us
                        </FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works </FooterLink>
                        <FooterLink to='/'>Testemonial </FooterLink>
                        <FooterLink to='/'>Careers </FooterLink>
                        <FooterLink to='/'>Investors </FooterLink>
                        <FooterLink to='/'>Termes of services </FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Contact Us
                        </FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works </FooterLink>
                        <FooterLink to='/'>Testemonial </FooterLink>
                        <FooterLink to='/'>Careers </FooterLink>
                        <FooterLink to='/'>Investors </FooterLink>
                        <FooterLink to='/'>Termes of services </FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Videos
                        </FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works </FooterLink>
                        <FooterLink to='/'>Testemonial </FooterLink>
                        <FooterLink to='/'>Careers </FooterLink>
                        <FooterLink to='/'>Investors </FooterLink>
                        <FooterLink to='/'>Termes of services </FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Social media
                        </FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works </FooterLink>
                        <FooterLink to='/'>Testemonial </FooterLink>
                        <FooterLink to='/'>Careers </FooterLink>
                        <FooterLink to='/'>Investors </FooterLink>
                        <FooterLink to='/'>Termes of services </FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon/>
                        ULTRA
                    </SocialLogo>
                    <WebSiteRights> © 2020 </WebSiteRights>
                    <SocialIcons>
                        <SocialIconsLink href='/' target="_blank" arial-label="Facebook">
                            <FaFacebook/>
                        </SocialIconsLink>
                        <SocialIconsLink href='/' target="_blank" arial-label="Intagram">
                            <FaInstagram/>
                        </SocialIconsLink>
                        <SocialIconsLink href={'https://www.youtube.com/watch?v=iP_HqoCuRI0&list=PLcpCZL_oOP_7RmFqUvwhfvLhHu-Rz0Nij&index=4&t=5860s'} target="_blank" arial-label="Youtube" rel="noopener noreferrer">
                            <FaYoutube/>
                        </SocialIconsLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
