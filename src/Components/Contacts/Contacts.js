import React, { lazy, memo } from 'react';
import fr from '../../assets/fr.jpg';
const ContainerContacts = lazy(() => import('./style').then((mod) => ({ default: mod.ContainerContacts })));
const ContainerContent = lazy(() => import('./style').then((mod) => ({ default: mod.ContainerContent })));
const AdressContainer = lazy(() => import('./style').then((mod) => ({ default: mod.AdressContainer })));
const ImageContainer = lazy(() => import('./style').then((mod) => ({ default: mod.ImageContainer })));
const Adress = lazy(() => import('./style').then((mod) => ({ default: mod.Adress })));
const Office = lazy(() => import('./style').then((mod) => ({ default: mod.Office })));
const Email = lazy(() => import('./style').then((mod) => ({ default: mod.Email })));
const Social = lazy(() => import('./style').then((mod) => ({ default: mod.Social })));

const PreviewInfo = lazy(() => import('../PreviewInfo/PreviewInfo'));
const RejimRaboty = lazy(() => import('./RejimRaboty'));
const ContactsTel = lazy(() => import('./ContactsTel'));
const Viber = lazy(() => import('../Social/Viber'));
const WattsApp = lazy(() => import('../Social/WattsApp'));

const Contacts = () => (
    <PreviewInfo>
        <ContainerContacts>
            <ContainerContent>
                <ImageContainer src={fr} alt='Фабрика Рекламы, Эльдорадо' />
                <AdressContainer>
                    <Adress>
                        Иркутская область,
                        <br /> г. Усть-Илимск,
                        <br /> пр. Мира 38 Б
                    </Adress>
                    <Office>(Здание ТЦ "Эльдорадо", 3 этаж, офис №14)</Office>
                </AdressContainer>
                <ContactsTel />
                <RejimRaboty />
                <Email href={`mailto:67208@mail.ru`} target='blank'>
                    e-mail: 67208@mail.ru
                </Email>
                <Social>
                    <Viber />
                    <WattsApp />
                </Social>
            </ContainerContent>
        </ContainerContacts>
    </PreviewInfo>
);

export default memo(Contacts);
