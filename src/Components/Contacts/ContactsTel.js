import React, { lazy, memo } from 'react';

const Telefons = lazy(() => import('./sty').then((mod) => ({ default: mod.Telefons })));
const TelefonsItem = lazy(() => import('./sty').then((mod) => ({ default: mod.TelefonsItem })));
const TelefonLink = lazy(() => import('./sty').then((mod) => ({ default: mod.TelefonLink })));

const ContactsTel = () => (
    <Telefons>
        <TelefonsItem>Телефоны:</TelefonsItem>
        <TelefonsItem>
            <TelefonLink href='tel:+79016685095'>+7 (901) 668-50-95</TelefonLink>
        </TelefonsItem>
        <TelefonsItem>
            <TelefonLink href='tel:+73953567208'>+7 (39535) 67-208</TelefonLink>
        </TelefonsItem>
    </Telefons>
);

export default memo(ContactsTel);
