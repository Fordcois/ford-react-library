import "../components/stylesheets/languageSwitch.css";
import { useState } from "react";

const LanguageSwitch = () => {
    const [language, setLanguage] = useState('ENG');
    const text = {
        Header: {
            'ENG': 'Welcome Friend!',
            'FRA': 'Bonjour!',
            'ESP': '¡Hola!',
            'GER': 'Hallo!'
        },
        IntroParagraph:{
            'ENG': 'Simply update the text objects with the relevant blocks of text you wish to include on your site, and you will be able to store these as their preferred languages within an object. This is a very simple way to handle translations for a limited number of languages. If you have more text or a more complex website, you may want to consider using a service like i18n.',
            'FRA': "Mettez simplement à jour les objets texte avec les blocs de texte pertinents que vous souhaitez inclure sur votre site, et vous pourrez les stocker comme langues préférées dans un objet. Il s'agit d'un moyen très simple de gérer les traductions pour un nombre limité de langues. Si vous avez plus de texte ou un site Web plus complexe, vous pouvez envisager d'utiliser un service comme i18n.",
            'ESP': "Simplemente actualice los objetos de texto con los bloques de texto relevantes que desea incluir en su sitio y podrá almacenarlos como sus idiomas preferidos dentro de un objeto. Esta es una forma muy sencilla de manejar traducciones para un número limitado de idiomas. Si tiene más texto o un sitio web más complejo, puede considerar utilizar un servicio como i18n.",
            'GER': "Aktualisieren Sie einfach die Textobjekte mit den relevanten Textblöcken, die Sie auf Ihrer Website einbinden möchten, und Sie können diese als bevorzugte Sprachen in einem Objekt speichern. Dies ist eine sehr einfache Möglichkeit, Übersetzungen für eine begrenzte Anzahl von Sprachen zu verwalten. Wenn Sie über mehr Text oder eine komplexere Website verfügen, sollten Sie die Nutzung eines Dienstes wie i18n in Betracht ziehen."
        },
        ParaTwoHeader:{
            'ENG': 'Hyperlinks - Using Placeholders',
            'FRA': "Liens hypertextes – Utilisation d'espaces réservés",
            'ESP': "Hipervínculos: uso de marcadores de posición",
            'GER': 'Hyperlinks – Platzhalter verwenden'
        },
        ParaTwo:{
            'ENG':"If you're using links, there are two ways to handle this. You can either use a placeholder in your text, such as <LINK>, split the text on that placeholder, and then replace it with a localised version of the word (link) - For example I can link to my GitHub <+LINK+> using the approach of SplitString[0] + LocalisedLink + SplitString[1].",
            'FRA':"Si vous utilisez des liens, il existe deux manières de gérer cela. Vous pouvez soit utiliser un espace réservé dans votre texte, tel que <LINK>, diviser le texte sur cet espace réservé, puis le remplacer par une version localisée du mot (lien) - Par exemple, je peux créer un lien vers mon GitHub <+LINK+> en utilisant l'approche de chaîneDivisée[0]+ lienLocalisé + chaîneDivisée[1].",
            'ESP':"Si utiliza enlaces, hay dos formas de manejar esto. Puede usar un marcador de posición en su texto, como <ENLACE>, dividir el texto en ese marcador de posición y luego reemplazarlo con una versión localizada de la palabra (enlace). Por ejemplo, puedo vincular a mi GitHub <+LINK+> utilizando el enfoque de cadenaDividida[0] + enlaceLocalizado + cadenaDividida[1].",
            'GER':"Wenn Sie Links verwenden, gibt es zwei Möglichkeiten, damit umzugehen. Sie können entweder einen Platzhalter in Ihrem Text verwenden, z. B. <LINK>, den Text auf diesem Platzhalter aufteilen und ihn dann durch eine lokalisierte Version des Wortes (Link) ersetzen. Beispielsweise kann ich auf meinen GitHub <+LINK+> verlinken unter Verwendung des geteilteZeichenfolge[0] + lokalisierterLink + geteilteZeichenfolge[1].",
        },
        ParaThreeHeader:{
            'ENG': 'Dangerously set inner HTML',
            'FRA': "Définir dangereusement le code HTML interne",
            'ESP': "HTML interno configurado peligrosamente",
            'GER': "Gefährlich gesetzter innerer HTML-Code"
        },
        ParaThree:{
            'ENG':"You could also use the dangerously Set Inner HTML property to include html links as code within your original strings. This approach may potentially introduce security risks, so be cautious. However, it will give you greater flexibility in naming your links. Rather than using the placeholder method mentioned above, you can link to a site like <a href='https://www.samueljford.com/'>my portfolio</a> using a custom named and localised title.",
            'FRA':"Vous pouvez également utiliser la propriété dangereusement Set Inner HTML pour inclure des liens html sous forme de code dans vos chaînes d'origine. Cette approche peut potentiellement introduire des risques de sécurité, alors soyez prudent. Cependant, cela vous donnera une plus grande flexibilité dans le nom de vos liens. Plutôt que d'utiliser la méthode d'espace réservé mentionnée ci-dessus, vous pouvez créer un lien vers un site tel que <a href='https://www.samueljford.com/'>mon portfolio</a> en utilisant un titre nommé et localisé personnalisé.",
            'ESP':"También puede utilizar la peligrosa propiedad Establecer HTML interno para incluir enlaces HTML como código dentro de sus cadenas originales. Este enfoque puede introducir riesgos de seguridad, así que tenga cuidado. Sin embargo, le dará mayor flexibilidad a la hora de nombrar sus enlaces. En lugar de utilizar el método de marcador de posición mencionado anteriormente, puede vincular a un sitio como <a href='https://www.samueljford.com/'>mi cartera</a> utilizando un título localizado y con nombre personalizado.",
            'GER':"Sie können auch die gefährliche Eigenschaft „Inneres HTML festlegen“ verwenden, um HTML-Links als Code in Ihre ursprünglichen Zeichenfolgen einzubinden. Dieser Ansatz kann möglicherweise Sicherheitsrisiken mit sich bringen. Seien Sie also vorsichtig. Allerdings erhalten Sie dadurch eine größere Flexibilität bei der Benennung Ihrer Links. Anstatt die oben erwähnte Platzhaltermethode zu verwenden, können Sie mit einem benutzerdefinierten benannten und lokalisierten Titel auf eine Website wie <a href='https://www.samueljford.com/'>mein Portfolio</a> verlinken."
        },
        Link:{
            'ENG': 'Link',
            'FRA': 'Lien',
            'ESP': 'Enlace',
            'GER': "Verknüpfung"
        },



    };

    const SplitParaTwo = text.ParaTwo[language].split('<+LINK+>')

return (
<div>
    <div className="Language-selection-bar">
        <span onClick={() => setLanguage('ENG')}>🇬🇧</span>
        <span onClick={() => setLanguage('FRA')}>🇫🇷</span>
        <span onClick={() => setLanguage('ESP')}>🇪🇸</span>
        <span onClick={() => setLanguage('GER')}>🇩🇪</span>
    </div>

<h1 className="title">{text.Header[language]}</h1>
<p className="paragraph">{text.IntroParagraph[language]}</p>

<h2 className="title">{text.ParaTwoHeader[language]}</h2>
<p className="paragraph">{SplitParaTwo[0]}
(< a href='https://github.com/Fordcois' target="_blank" rel="noopener noreferrer">
{text.Link[language]}</a>
){SplitParaTwo[1]}
</p>

<h2 className="title">{text.ParaThreeHeader[language]}</h2>
<p className="paragraph" dangerouslySetInnerHTML={{ __html: text.ParaThree[language] }} ></p>

</div>
    );
}

export default LanguageSwitch;