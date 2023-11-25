import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";

export default class Facts extends React.Component {
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  render() {
    return (
      <View>
        <Text>
<h1>
BHARATANATYAM
</h1>
Bharatanatyam is the dance form practiced in Tamilnadu. A reference to dance in Tamil texts goes back about 2000 years ago to the period of Sangam literature. 
The next valuable reference is available from the epic called the Silappadikaram' that dates back to the 2nd century CE. In the Silappadikaram, the author Ilango Adigal, writes extensively about classical dance through the character Madhavi. 
There are also references to classical dance in texts on grammar and other literary works References of dance in earlier days are also found in sculptures and inscriptions in many ancient temples in Tamilnadu.

Küttanül, Panchamarabu, Mahabharatacüdomani and Bharatasenapatiyam are the available Tamil texts on Natya. However, the most common text that is followed by practitioners of Bharatanatyam today is the Abhinayadarpanam of Nandikesvara,

Bharatanatyam is both graceful and vibrant, it contains three components: nrtta (non representational), nrtya (representational) and (dramatic). Bharatanatyam was earlier performed by the devadasi-s and rajadasi-s who performed in the temple and court respectively. The nattuvunārs or the dance masters were the real composers and choreographers of this rich art form. They taught the art to the dancing and together, both of them preserved and propagated the art form.

Four brothers, Chinnayya, Ponnayya, Sivanandam and Vadivelu called the Tanjore Quartette who were supported by the Maratha kings, crafted the repertoire known as 'Margam' (path). The margam forms the basis of the Bharatanatyam performance format even today.

<b>
The items that were usually performed in a Bharatanatyam margam performance as suggested by the Tanjore Quartette were:
</b>
<b>
Alârppu Jatisvaram

Sabdam

Varnam or Svarajati

Padam/Jāvali

Tillānā

Viruttam/Slokam
</b>
<p>
It is believed that Tevaram-s have also been performed by devadasi-s in temples

In addition to this, compositions such as Puspanjali, Kavuttuvam, Mallāri, Thodayamangalam, Astapadi, Kävadicindu, Kuratti, Tiruvācakam, Tālāttu and Divyaprabandam are also included in today's performances.

The puneering exponents of Bharatanatyamn include Meenakshi Sundaram Pillai, Kittappa Pillai, Mylapore Gowri Ammal, T. Balasaraswathi, Devi, Mrinalini Sarabhai and M.K. Saroja.

The style of music used for Bharatanatyam is carnatic music. A Bharatanatyam costume is stitched using a silk saree, generally with gold zari work. 
Costumes are generally skirt/saree or pyjama style for women, while male dancers drape a dhoti.

Bharatanatyam as it is called today was known by several names such as Küttu, Adal, Chinnamelam and Sadir till the 19th Century.
</p>
</Text>
<Text>
  <h1>
EVOLUTION OF NATYA
</h1>
<b>
MYTHOLOGY
</b>
<p>
Towards the end of Treta Yuga, there was a lot of misery and suffering as people had started disobeying the laws of nature. 
People were selfish, greedy and power crazy. The Deva s went to Lord Brahmo, the creator and requested him to create an art form, which would remind the people about dharmo Brahma went into deep meditation recollecting the four Vedo-s and created the fifth Veda called 'Natya Veda' in order to uplift the people. 
He took the text from the Rig Veda, music from the Soma Veda, abhinaya (expression) from the Yajur Veda and rasa from the Atharva Veda.

The names of the four vuga-s are Satyayuga or Krtayuga, Tretayuga, Dvaparayuga and Kaliyuga! We are now believed to be in the Kaliyuga!

Brahma taught Natya Veda to Bharatamuni and he in turn taught it to his 100 sons (or disciples). On Bharata's request, Brahma created 24 Apsaras (nymphs) to learn and perform the KaiŝikiVrtti, which comprised graceful movements.

During, the festival of "Indradhvaja", Bharatamuni staged a drama called "Amṛtamanthanam". The Asuras on seeing their defeat depicted in the performance were offended and started disturbing the drama. 
Indra warded off the evil with his jarjara and Višvakarman was ordered to build an auditorium for performing natya and the Gods were assigned to protect the actors and audience from the forces of evil.

Bharatamuni then performed a drama called "Tripura Dahanam" in front of Lord Siva. Siva was very impressed and he recollected his own dance. He requested his attendant Tandu to teach it to the 100 sons of Bharata. As this dance was taught by Tandu, it came to be called Tandavanṛtta.

Lasya graceful aspect of Siva's dance was taught by Parvati to the world. Usa the daughter of Banasura was a great devotee of Parvati. Pleased with her devotion, Parvati taught the Lasya aspect to Usa. Usa in turn taught all her friends in Dvaraka. This is how dance is believed to have come to this mortal world.
</p>
<h1>
SOCIAL EVOLUTION
</h1>
<p>
History has shown that dance was always part of the human desire to express our deepest feelings. Early dance movements slowly became structured and evolved into folk dances, which in turn crystallized into the classical dances that we know today.
Even before language evolved, hunters are believed to have come back to their settlements and enacted their hunting episodes to their tribes. This can be considered to be the origin of drama!
</p></Text>

<Text>
  <h1>
NRTTA
</h1>
<p>
Nrtta comprises of adavu-s done as korvai or jati-s. Nitta is the rhythmic aspect of dance set to tala. It does not tell a story. (Nrtta need not communicate an idea. Its quality is to add beauty to dance)

The Alärippu and Jatisvaram are Nrtta compositions!
</p>

<h1>
NRTYA
</h1>
<p>
Nrtya is 'expressive dance' or simple communication. The abhinaya

hasta-s and facial expressions are used to convey the meaning of the sahityam (words).

We see elements of Nrtya in items like the Sabdam & Kirtanam, Padam or Javali,
</p>
<h1>
NATYA
</h1>
<p>
Natya literally means drama. In addition to netta and nrtya, it includes characterization, dialogues and stage props.It uses all the four types of abhinaya: angika, väcika, ähärya and sáttvika.

Any dance such as Rāmāyana or Mahabharata done with relevant make-up, costumes, stage properties and settings is a good example of Natya.
</p>
</Text>

<Text>
  <h2>
DEFINITIONS:
</h2>

<h1>
TANDAVA:
</h1>
<p>
Tandava is a vigorous dance associated with Lord Siva.
Siva is believed to have performed the Tandava for the five works or pancakṛtyam of 'Srsti' - creation, evolution, 'Sthiti - preservation, support; 'Samhara' destruction, evolution; Tirobhava - illusion, 'Anugraha- blessing and grace.
</p>
<h1>
LASYA:
</h1>
<p>
It is the feminine counterpart of Tandava performed by Parvathi. It is a graceful dance with Srngara as the dominant rasa. Both the Tandava and Lasya can be performed by men and women equally.
</p>
<h1>
ABHINAYA:
</h1>
<p>
In Natya, the technique of communicating a message to the spectator is known as abhinaya. A Sanskrit term, 'Abhinaya' literally means 'to carry towards (the prefix 'abhi' means 'towards and the root 'ni' means to 'carry'). There are four types of abhinaya.
</p>
<h3>
1. Angikam through the body
</h3>
<h3>
2. Vacikam -through words
</h3>
<h3>
3. Aharyam through costumes, make up, jewellery and stage props
</h3>
<h3>
4. Sättvikam -through feelings and emotions.
</h3>

</Text>

<Text>
  <h1>Detailed description about Abhinaya</h1>
  <h3>
1.ANGIKA ABHINAYA
</h3><p>
Angika Abhinaya is shown through the movements of limbs it is the use of gestures or body movements (the conventional gestures codified in texts) in order to communicate a thought or a theme For example hand gestures, movements of the head, eyes and so on.
</p>
<h3>
2. VĀCIKA ABHINAYA
</h3><p>
Vācika abhinaya constitutes kavyas (poems) and natakas (dramas) which are made up of speech and song Vacika abhinaya can also mean the use of proper language, pronunciation, modulation of voice, accent and rhythm. For example-the songs, the delivery of dialogues in dramas, etc
</p>
<h3>
3.AHARYA ABHINAYA
</h3><p>
Äharya abhinaya includes the use of costumes, jewellery and make up. It also refers to stage props, decor and ornamentation and is especially important in dance drama presentations.
For example - the costumes and facial make up in the dance dramas to represent different characters.
</p>
<h3>
4.SATTVIKA ABHINAYA
</h3><p>
The word Sattvika comes from the Sanskrit word sattva (purity) and relates to the outward manifestation of a particular emotion the dancer experiences within.
For example horripilation
</p>
</Text>
      </View>
    );
  }
}