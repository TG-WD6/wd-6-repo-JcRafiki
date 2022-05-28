===========

VRAGEN HTML

===========

Implicit ARIA roles:
Header
    banner, or no corresponding role if a descendant of an article, aside, main, nav or section element, or an element with role=article, complementary, main, navigation or region
Footer
    contentinfo, or no corresponding role if a descendant of an article, aside, main, nav or section element, or an element with role=article, complementary, main, navigation or region
Section
    region if the element has an accessible name, otherwise no corresponding role
Aside
    complementary
Input
    The input abstract role is a generic type of widget that allows user input.

Wat is HTML?
    HTML staat voor HyperText Markup Language, Het is de standaard taal voor webpagina's waarmee de structuur van de pagina wordt bepaald. 

Hoe ziet de basis-structuur van HTML eruit?
    <!DOCTYPE html> definieert dat het een html pagina betreft
    <html> root element van de pagina
    <head> bevat de meta data van de pagina
    <title> specificeert de titel van de pagina
    <body> definieert de body van de pagina, bevat alle zichtbare content

Wat is een anchor tag?
    is een verwijzing naar een andere pagina of een ander gedeelte op dezelfde pagina

Noem een aantal nieuwe functionaliteiten van HTML5
    https://www.geeksforgeeks.org/top-10-new-features-of-html5/
    1. Audio / video -> embedden
    2. Vector graphics -> maken van vector figuren die interactable en animeerbaar zijn
    3. Header and Footer -> Header is standaard aan het begin en footer aan het eind, de browser weet welke als eerste geladen moet worden
    4. Figure and Figcaption -> <figure> for markup a photo in a document, <figcaption> define caption for a <figure> element
    5. <nav> tag -> defines a set of navigational links.
    6. <progress> tag -> is used to check the progress of a task during the excecution
    7. Placeholder attribute -> specifies a short hint that describes the expected value of an input field/text animeerbaar
    8. Email attribute -> When the input type in the form set as email, then the browser gets the instruction from the code to write a valid format email. The input email id is automatically validated to check the format of the email id is correct or not.
    9. Storage -> In the case of HTML, we can use the browser as the temporary storage whereas, in the case of HTML5, application cache, web SQL database, and web storage is used.
 
Wat zijn HTML attributen?
    HTML attributes provide addition information about HTML elements (https://www.w3schools.com/html/html_attributes.asp)
    tag <a> atrribute href -> <a href=''></a>

Wat is HTML semantics?
    Semantic elements - elements with a meaning (https://www.w3schools.com/html/html5_semantic_elements.asp)
    non-semantic <div> <span>
    semantic <aside> <details> <figcaption> <figure> <footer> <header> <main> <mark> <nav> <section> <summary> <time>

Waarvoor worden meta tags gebruikt?
    (https://www.w3schools.com/tags/tag_meta.asp)
    <meta> tag defines metadata about a HTML document, <meta> tags always go inside the <head> element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.

Wat is een nested element?
    An element inside another element (https://www.tutorialbrain.com/html_tutorial/html_elements/)
    <p>This is <b>bold</b> text</p>

Wat is het verschil tussen inline- en blok-elementen?
    (https://www.w3schools.com/html/html_blocks.asp)
    Every HTML element has a default display value, depending on what type of element it is.
    There are two display values: block and inline.
    A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
    A block-level element always takes up the full width available (stretches out to the left and right as far as it can).

    An inline element does not start on a new line.
    An inline element only takes up as much width as necessary.

Wat is accessibility?
    (https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
    A great deal of web content can be made accessible just by making sure the correct Hypertext Markup Language elements are used for the correct purpose at all times.
    Use semantic HTML:
    1. Easier to develop with
    2. Better on mobile
    3. Good for SEO

===========

VRAGEN CSS

===========

===========

Selectors & Visual rules
part 1

===========

1. Je kunt op 3 verschillende manieren CSS in je HTML inladen. Op welke 3 manieren kun je dat doen? Leg ook voor elke wijze uit wat het precies inhoud. (https://www.w3schools.com/css/css_howto.asp)
- External: With an external style sheet, you can change the look of an entire website by changing just one file!
            Each HTML page must include a reference to the external style sheet file inside the <link> element, inside the head section.-> <link rel="stylesheet" href="mystyle.css">

- Internal: An internal style sheet may be used if one single HTML page has a unique style.
            The internal style is defined inside the <style> element, inside the head section. ->
            <head>
                <style>
                    body {
                    background-color: linen;
                    }

                    h1 {
                    color: maroon;
                    margin-left: 40px;
                    }
                </style>
            </head>

- Inline: Inline styles are defined within the "style" attribute of the relevant element ->
          <h1 style="color:blue;text-align:center;">This is a heading</h1>

2. CSS pas je toe met een bepaalde syntax. Hoe ziet zo'n syntax eruit? Kun je ook uitleggen wat elk element uit de syntax betekent?
    (https://www.w3schools.com/css/css_syntax.asp)
    Selector {properties: values;}
    Declaration: everything between {}, contains one or more  declarations separated with a ;
    CSS-selector points to the HTML element you want to style

3. Er zijn verschillende selectors, bijvoorbeeld; (https://www.w3schools.com/css/css_selectors.asp)
    (https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors)
    (https://www.w3schools.com/css/css_combinators.asp)
    -type selectors
    -class selectors
    -ID selectors
    -descendant selectors
    Maak van de bovengenoemde selectors voorbeelden. Geef in je antwoord ook aan wat de voordelen zijn van elke selector.

    Type-selector: The CSS type selector matches elements by node name. In other words, it selects all elements of the given type within a document.
    /* All <a> elements. */
    a {
    color: red;
    }

    Class-selector: The class selector selects HTML elements with a specific class attribute.To select elements with a specific class, write a period (.) character, followed by the class name.
    .center {
        text-align: center;
        color: red;
        }

    ID-selector: uses the id attribute of an HTML element to select a specific element, To select an element with a specific id, write a hash (#) character, followed by the id of the element.
    #para1 {
        text-align: center;
        color: red;
        }

    Descendant-selectors (CSS combinators):
    A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.
    There are four different combinators in CSS:
        -descendant selector (space)
        -child selector (>)
        -adjacent sibling selector (+)
        -general sibling selector (~)
    
    Descendant Selector:
    The descendant selector matches all elements that are descendants of a specified element.
    The following example selects all <p> elements inside <div> elements: 
        div p {
        background-color: yellow;
        }
    
    Child Selector (>)
    The child selector selects all elements that are the children of a specified element.
    The following example selects all <p> elements that are children of a <div> element:
        div > p {
        background-color: yellow;
        }

    Adjacent Sibling Selector (+)
    The adjacent sibling selector is used to select an element that is directly after another specific element.
    Sibling elements must have the same parent element, and "adjacent" means "immediately following".
    The following example selects the first <p> element that are placed immediately after <div> elements:
        div + p {
        background-color: yellow;
        }

    General Sibling Selector (~)
    The general sibling selector selects all elements that are next siblings of a specified element.
    The following example selects all <p> elements that are next siblings of <div> elements: 
        div ~ p {
        background-color: yellow;
        }
    
    CSS [attribute] Selector
    The [attribute] selector is used to select elements with a specified attribute.
    The following example selects all <a> elements with a target attribute:
        a[target="_blank"] {
        background-color: yellow;
        }

4. zie html file
5. zie html file
6. zie html file
7. zie html file

8.Styling die je toepast wordt toegepast in een bepaalde volgorde. Het kan voorkomen dat je styling toepast en vervolgens niet het gewenste resultaat ziet. Cascade en Inheritance zijn belangrijke concepten om te begrijpen hoe styling werkt. Lees hier in de officiële documentatie meer over cascade en inheritance.
Zoek ook andere referenties om het concept te begrijpen.
Leg in eigen woorden uit wat met cascade en inheritance wordt bedoeld. Maak voorbeelden om je antwoord uit te leggen.
(https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
(https://www.youtube.com/watch?v=N8tFrMZp_wA)
(https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)

Initial CSS -> Initional vlaue defined by the formal CSS definition
Browser specific CSS -> default CSS values set by the browser (user agent stylesheet)
Custom CSS -> custom CSS

Inherit, always takes value from the parentcontainer

Cascading algorithm determines how to find the value to apply for each property for each document element
    -Revelance: It first filters all the rules from the different sources to keep only the rules that apply to a given element. That means rules whose selector matches the given element and which are part of an appropriate media at-rule.

    -Origin and importance:Then it sorts these rules according to their importance, that is, whether or not they are followed by !important, and by their origin. Ignoring layers for the moment, the cascade order is as follows:
        origin                      importance
    1 user-agent (browser)          normal
    2 user                          normal
    3 author (developer)            normal
    4 CSS @keyframe animations      -
    5 author (developer)            !important
    6 user                          !important
    7 user-agent (browser)          !important
    8 CSS transitions

    -Specificity: In case of equality with an origin, the specificity of a rule is considered to choose one value or another. The specificity of the selectors are compared, and the declaration with the highest specificity wins.

    -Order of appearance: In the origin with precedence, if there are competing values for a property that are in style block matching selectors of equal specificity, the last declaration in the style order is applied

Cascade: De volgorde waarop de CSS wordt uitgevoerd
Inheritance: eigenschappen erven van de parent



=========================

HET BOX MODEL 
part 2

=========================

1. Wat zijn de eigenschappen van block boxes en inline boxes?
Block-boxes:
The box will break onto a new line.
The box will extend in the inline direction to fill the space available in its container. In most cases this means that the box will become as wide as its container, filling up 100% of the space available.
The width and height properties are respected.
Padding, margin and border will cause other elements to be pushed away from the box.

Inline-boxes:
The box will not break onto a new line.
The width and height properties will not apply.
Vertical padding, margins, and borders will apply but will not cause other inline boxes to move away from the box.
Horizontal padding, margins, and borders will apply and will cause other inline boxes to move away from the box.

2. zie HTML file

3. Wat gebeurt er als je een width en een height toevoegt aan de span tag ( <span> ) van vorige opdracht?
Niks

4. Leg uit wat de volgende termen betekenen: content, padding, margin en border.
Content = de inhoud van de container
Padding = maakt ruimte om de content binnen de gedefinieerde borders (https://www.w3schools.com/css/css_padding.asp)
Margin = maakt ruimte om de content buiten de gedefinieerde borders (https://www.w3schools.com/css/css_margin.asp)
Border = de rand van het element (https://www.w3schools.com/css/css_border.asp)

5. Als je ruimte wilt maken tussen de border en content, welke css property gebruik je dan? Maak een voorbeeld in je antwoord.
Margin (zie HTML file)

6. Als je ruimte wilt maken tussen de border en buiten de box, welke css property gebruik je dan? Maak een voorbeeld in je antwoord.
Padding (zie html file)

7. Maak nu een blok met width: 100px, height: 100px, margin: 5px, padding 5px en border-width: 5px. Zie hieronder:
    Hoe breed is de box?
    Width 100px + padding 5px + border 5px = 110px

    Hoe hoog is de box?
    Height 100px + padding 5px + border 5px = 110px

    Wat merk je op met width en height?
    zijn hoger dan gedefinieerd

8. Welke CSS property kun je gebruiken om ervoor te zorgen dat de waarde van width en height de totale breedte en hoogte is van het blok van de voorgaande opdracht?
box-sizing: border-box; (https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

================

Display & Positioning 
part 3

================

1. De belangrijkste waardes van “position” zijn static, relative, absolute, fixed & sticky. Leg voor elke uit wat ze doen.
(https://developer.mozilla.org/en-US/docs/Web/CSS/position)

Static
The element is positioned according to the normal flow of the document. The top, right, bottom, left, and z-index properties have no effect. This is the default value.

Relative
The element is positioned according to the normal flow of the document, and then offset relative to itself based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements; thus, the space given for the element in the page layout is the same as if position were static.

Absolute
The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial containing block. Its final position is determined by the values of top, right, bottom, and left.

Fixed
The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to the initial containing block established by the viewport, except when one of its ancestors has a transform, perspective, or filter property set to something other than none (see the CSS Transforms Spec), in which case that ancestor behaves as the containing block. (Note that there are browser inconsistencies with perspective and filter contributing to containing block formation.) Its final position is determined by the values of top, right, bottom, and left.

Sticky
The element is positioned according to the normal flow of the document, and then offset relative to its nearest scrolling ancestor and containing block (nearest block-level ancestor), including table-related elements, based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements.

2/3/4/5/6/7/8
Zie HTML file

===========

Pseudo elements 
part 4

===========

1. Er zijn 14 verschillende pseudo-elementen. Beschrijf ze alle 14 kort en maak voor elk een voorbeeld (https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
::after
In CSS, ::after creates a pseudo-element that is the last child of the selected element. It is often used to add cosmetic content to an element with the content property. It is inline by default.

::backdrop
The ::backdrop CSS pseudo-element is a box the size of the viewport which is rendered immediately beneath any element being presented in fullscreen mode. This includes both elements which have been placed in fullscreen mode using the Fullscreen API and <dialog> elements.
When multiple elements have been placed into fullscreen mode, the backdrop is drawn immediately beneath the frontmost such element, and on top of the older fullscreen elements

::before
In CSS, ::before creates a pseudo-element that is the first child of the selected element. It is often used to add cosmetic content to an element with the content property. It is inline by default.

::cue
The ::cue CSS pseudo-element matches WebVTT cues within a selected element. This can be used to style captions and other cues in media with VTT tracks.

::cue-region
The ::cue-region CSS pseudo-element matches WebVTT cues within a selected element. This can be used to style captions and other cues in media with VTT tracks.

::first-letter
The ::first-letter CSS pseudo-element applies styles to the first letter of the first line of a block-level element, but only when not preceded by other content (such as images or inline tables).

::first-line
The ::first-line CSS pseudo-element applies styles to the first line of a block-level element.

::file-selector-button
The ::file-selector-button CSS pseudo-element represents the button of an <input> of type="file".

::grammar-error
The ::grammar-error CSS pseudo-element represents a text segment which the user agent has flagged as grammatically incorrect.

::marker
The ::marker CSS pseudo-element selects the marker box of a list item, which typically contains a bullet or number. It works on any element or pseudo-element set to display: list-item, such as the <li> and <summary> elements.

::part()
The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.

::placeholder
The ::placeholder CSS pseudo-element represents the placeholder text in an <input> or <textarea> element.

::selection
The ::selection CSS pseudo-element applies styles to the part of a document that has been highlighted by the user (such as clicking and dragging the mouse across text).

::slotted()
The ::slotted() CSS pseudo-element represents any element that has been placed into a slot inside an HTML template (see Using templates and slots for more information).
This only works when used inside CSS placed within a shadow DOM. Note also that this selector won't select a text node placed into a slot; it only targets actual elements.

::spelling-error
The ::spelling-error CSS pseudo-element represents a text segment which the user agent has flagged as incorrectly spelled.

::target-text
The ::target-text CSS pseudo-element represents the text that has been scrolled to if the browser supports scroll-to-text fragments. It allows authors to choose how to highlight that section of text.

2. zie HTML file (https://stackoverflow.com/questions/41851407/square-div-with-border-only-show-the-corners)
3. zie HTML file
4. zie HTML file
5. zie HTML file

=========

Flexbox
part 5

=========

1-8. zie HTML file

=========

Grid
part 6

=========

1. Bij CSS Grid wordt vaak gebruikgemaakt van een speciale lengte-eenheid: “fr”. Onderzoek wat deze doet en beschrijf het in je eigen woorden.
fr = fraction, deelt automatisch de overgebleven witte ruimte op met de gedefinieerde parameters

2-5. Zie HTML file

6. Wat is het verschil tussen justify/align/place-items en justify/align/place-content?
(https://developer.mozilla.org/en-US/docs/Web/CSS/place-items)
(https://developer.mozilla.org/en-US/docs/Web/CSS/place-content)
(https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
(https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
(https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
(https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

place-items = align items alnog BOTH the block and inline directions
place-content = allows you to align content along both the block and inline directions at once in a relevant layout system

align-items = sets the value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid, it controls the alignment of items on the Block Axis within their grid area.
align-content = sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis

justify-items = defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
justify-content = property defines hoe the browser distributes space between and around content items along the main-axis of a flex-container, and the inline axis of a grid

7. zie HTML file




=========

Transitions
part 7

=========

1. Zoek uit wat transitions zijn en beschrijf met eigen woorden wat het betekent.
CSS transitions allows you to change property values smoothly, over a given duration. -> je kan dus elementen animeren