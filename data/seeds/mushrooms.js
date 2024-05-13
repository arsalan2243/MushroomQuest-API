/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('mushrooms').truncate();

  // Insert new records into the 'mushrooms' table
  await knex('mushrooms').insert([
    // Insert mushroom data here
      {
        "name": "Laetiporus gilbertsonii",
        "img": "https://www.mykoweb.com/CAF/photos/large/Laetiporus_gilbertsonii%28fs-05%29.jpg",
        "pileus": "",
    
        "lamellae": "",
        "stipe": "",
        
        "edibility": "Edible with caution. eat in small quantities.",
        "regular": false,
        "color": "yellow"
        },
        {
          "name": "Gomphus clavatus",
          "img": "https://www.mykoweb.com/CAF/photos/large/Gomphus_clavatus%28mgw-03%29.jpg",
          "pileus": "",
      
          "lamellae": "",
          "stipe": "",
          
          "edibility": "Edible but can be infested with fly larva.",
          "regular": false,
          "color": "brownpurple"
          },
          {
            "name": "Pleurotus ostreatus",
            "img": "https://www.mykoweb.com/CAF/photos/large/Pleurotus_ostreatus%28mgw-02%29.jpg",
            "pileus": "white smooth",
        
            "lamellae": "gills decurrent white",
            "stipe": "thick symmetrical partial",
            
            "edibility": "Edible and delicious.",
            "regular": true,
            },
            
            {
              "name": "Volvopluteus gloiocephalus",
              "img": "https://www.mykoweb.com/CAF/photos/large/Volvopluteus_gloiocephalus%28fs-01%29.jpg",
              "pileus": "white smooth",
          
              "lamellae": "gills free white",
              "stipe": "thick symetrical universal",
              
              "edibility": "Edible.",
              "regular": true,
              },
              {
                "name": "Sarcodon imbricatus",
                "img": "https://www.mykoweb.com/CAF/photos/large/Sarcodon_imbricatus%28fs-01%29.jpg",
                "pileus": "scales brown",
            
                "lamellae": "teeth cream",
                "stipe": "thick largerbottom partial",
                
                "edibility": "Edible if not bitter.",
                "regular": true,
                },
                {
                  "name": "Suillus brevipes",
                  "img": "https://www.mykoweb.com/CAF/photos/large/Suillus_brevipes%28mgw-03%29.jpg",
                  "pileus": "brown smooth wet",
              
                  "lamellae": "pores yellow",
                  "stipe": "thick symmetrical universal",
                  
                  "edibility": "Edible but lack texture.",
                  "regular": true,
                  },
                  {
                    "name": "Suillus pungens",
                    "img": "https://www.mykoweb.com/CAF/photos/large/Suillus_pungens%28mgw-03%29.jpg",
                    "pileus": "black smooth wet",
                
                    "lamellae": "pores yellow",
                    "stipe": "thick symmetrical partial",
                    
                    "edibility": "Edible infested with fly larva.",
                    "regular": true,
                    },
                    {
                      "name": "Lycoperdon perlatum",
                      "img": "https://www.mykoweb.com/CAF/photos/large/Lycoperdon_perlatum_fs-03.jpg",
                      "pileus": "",
                  
                      "lamellae": "",
                      "stipe": "",
                      
                      "edibility": "Edible, bland.",
                      "regular": false,
                      "color": "brown"
                      },
                      {
                        "name": "Laccaria amethysteo-occidentalis",
                        "img": "https://www.mykoweb.com/photos/large/Laccaria_ao%28mgw-02%29.jpg",
                        "pileus": "purple scales",
                    
                        "lamellae": "gills decurrent purple ",
                        "stipe": "thick symmetrical universal",
                        
                        "edibility": "Edible, no flavor.",
                        "regular": true,
                        },
                        {
                          "name": "Tricholoma equestre",
                          "img": "https://www.mykoweb.com/CAF/photos/large/Tricholoma_equestre_ns-01.jpg",
                          "pileus": "smooth yellow",
                      
                          "lamellae": "gills notched yellow",
                          "stipe": "thick largerbottom universal",
                          
                          "edibility": "Edible and delicious.",
                          "regular": true,
                          },
                          {
                            "name": "Lactarius deliciosus",
                            "img": "https://www.mykoweb.com/CAF/photos/large/Lactarius_deliciosus_fs-04.jpg",
                            "pileus": "smooth green",
                        
                            "lamellae": "gills decurrent orange",
                            "stipe": "thick largerbottom partial",
                            
                            "edibility": "Edible and delicious.",
                            "regular": true,
                            },
                            {
                              "name": "Lactarius rubrilacteus",
                              "img": "https://www.mykoweb.com/CAF/photos/large/Lactarius_rubrilacteus%28mgw-03%29.jpg",
                              "pileus": "orange zoning",
                          
                              "lamellae": "gills decurrent white",
                              "stipe": "thick symmetrical partial",
                              
                              "edibility": "Edible.",
                              "regular": true,
                              },
                              {
                                "name": "Leccinum manzanitae",
                                "img": "https://www.mykoweb.com/CAF/photos/large/Leccinum_manzanitae_mgw-02.jpg",
                                "pileus": "smooth red",
                            
                                "lamellae": "pores white partial",
                                "stipe": "thick ventricose",
                                
                                "edibility": "Edible.",
                                "regular": true,
                                },
                                {
                                  "name": "Leucoagaricus leucothites",
                                  "img": "https://www.mykoweb.com/CAF/photos/large/Leucoagaricus_leucothites%28fs-05%29.jpg",
                                  "pileus": "smooth white",
                              
                                  "lamellae": "gills free white ",
                                  "stipe": "thick largerbottom partial",
                                  
                                  "edibility": "Edible, but excericse extreme cautios as this one can be confused with poisonous Amanitas.",
                                  "regular": true,
                                  },
            {
              "name": "Morchella rufobrunnea",
              "img": "https://www.mykoweb.com/CAF/photos/large/Morchella_rufobrunnea%28fs-01%29.jpg",
              "pileus": "",
          
              "lamellae": "",
              "stipe": "",
              
              "edibility": "Edible and excellent",
              "regular": false,
              "color": "cream"
              },
              {
                "name": "Hericium erinaceus",
                "img": "https://www.mykoweb.com/CAF/photos/large/Hericium_erinaceus%28nw-01%29.jpg",
                "pileus": "",
            
                "lamellae": "",
                "stipe": "",
                
                "edibility": "Edible ",
                "regular": false,
                "color": "white"
                },
                {
                  "name": "Hericium coralloides",
                  "img": "https://www.mykoweb.com/CAF/photos/large/Hericium_coralloides%28mgw-01%29.jpg",
                  "pileus": "",
              
                  "lamellae": "",
                  "stipe": "",
                  
                  "edibility": "Edible ",
                  "regular": false,
                  "color": "white"
                  },
                {
      "name": "Agaricus fissuratus",
      "img": "https://www.mykoweb.com/CAF/photos/Agaricus_fissuratus%28fs-08%29.jpg",
      "pileus": "smooth cream",
  
      "lamellae": "gills free brown",
      "stipe": "thick partial largerbottom",
      
      "edibility": "Excellent, though not as meaty as Agaricus augustus or A. bitorquis.",
      "regular": true
      },
      {
      "name": "Agaricus augustus",
      "img": "https://www.mykoweb.com/CAF/photos/Agaricus_augustus%28mgw-01%29.jpg",
      "pileus": "brown scales",
  
      "lamellae": "gills free pink",
      "stipe": "thick symmetrical partial",
      
      "edibility": "An excellent edible, one of the very best. Unfortunately it is frequently infested with fly larvae.",
      "regular": true
      },
      {
      "name": "Agaricus benesii",
      "img": "https://www.mykoweb.com/CAF/photos/Agaricus_benesii_fs-02.jpg",
      "pileus": "cracked white",
  
      "lamellae": "gills free pink",
      "stipe": "thick symmetricalte, partial",
      
      "edibility": "Edible.",
      "regular": true
      },
      {
      "name": "Agaricus bernardii",
      "img": "https://www.mykoweb.com/CAF/photos/Agaricus_bernardii%28fs-09%29.jpg",
      "pileus": "warts white",
  
      "lamellae": "gills free pink",
      "stipe": "thick largertop partial",
      
      "edibility": "Edible and excellent, although the briny taste deters some people.",
      "regular": true
      },
      {
      "name": "Agaricus bisporus",
      "img": "https://www.mykoweb.com/CAF/photos/Agaricus_bisporus_fs-04.jpg",
      "pileus": "sclaes white",
  
      "lamellae": "gills free pink ",
      "stipe": "thick symmetrical partial",
      
      "edibility": "Edible and very good.",
      "regular": true
      },
      {
        "name": "Agaricus bitorquis",
        "img": "https://www.mykoweb.com/CAF/photos/Agaricus_bitorquis_fs-01.jpg",
        "pileus": "smooth white",
    
        "lamellae": "gills free pink",
        "stipe": "thick symmetrical partial",
        
        "edibility": "Excellent; substantial size, firm texture, and good flavor make this one of the best Agaricus species for the table.",
        "regular": true
    },
    {
        "name": "Agaricus campestris",
        "img": "https://www.mykoweb.com/CAF/photos/Agaricus_campestris%28fs-03%29.jpg",
        "pileus": "smooth white",
    
        "lamellae": "gills free pink",
        "stipe": "thick largerbottom partial",
        
        "edibility": "Edible, of good flavor, but lacking the solid texture of an Agaricus bitorquis.",
        "regular": true
    },
    {
        "name": "Agaricus incultorum",
        "img": "https://www.mykoweb.com/CAF/photos/Agaricus_incultorum_fs-04.jpg",
        "pileus": "warts brown",
    
        "lamellae": "gills free pink",
        "stipe": "thick largertop partial",
        
        "edibility": " Edible, of good flavor.",
        "regular": true
    },
    {
        "name": "Agaricus brunneofibrillosus",
        "img": "https://www.mykoweb.com/CAF/photos/Agaricus_brunneofibrillosus_fs-03.jpg",
        "pileus": "scales brown",
    
        "lamellae": "gills free pink",
        "stipe": "thick partial largerbottom",
        
        "edibility": "Edible and excellent, an opinion shared by the fly larva which frequently infest this mushroom.",
        "regular": true
    },
    {
        "name": "Agaricus fuscovelatus",
        "img": "https://www.mykoweb.com/CAF/photos/Agaricus_fuscovelatus%28fs-02%29.jpg",
        "pileus": "scales brown",
    
        "lamellae": "gills free pink",
        "stipe": "thick symmetrical partial",
        
        "edibility": "Edible and excellent, but often infested with fly larva.",
        "regular": true
    },
    {
        "name": "Agaricus lilaceps",
        "img": "https://www.mykoweb.com/CAF/photos/Agaricus_lilaceps%28fs-02%29.jpg",
        "pileus": "scales brown",
    
        "lamellae": "gills free pink",
        "stipe": "thick ventricose partial",
        
        "edibility": "Edible and choice.",
        "regular": true
    },
    {
        "name": "Agaricus pattersonae",
        "img": "https://www.mykoweb.com/CAF/photos/Agaricus_pattersonae%28mgw-10%29.jpg",
        "pileus": "warts brown.",
    
        "lamellae": "gills free pink",
        "stipe": "thick partial largerbottom",
        
        "edibility": "Edible and excellent, but prone to insect damage.",
        "regular": true
    },
    {
        "name": "Agaricus perobscurus",
        "img": "https://www.mykoweb.com/CAF/photos/Agaricus_perobscurus(fs-02).jpg",
        "pileus": "darkbrown scales",
    
        "lamellae": "gills free brownpink ",
        "stipe": "thick largerbottom partial",
        
        "edibility": "Edible but excercise cautious.",
        "regular": true
    },
    {
        "name": "Agaricus sylvicola",
        "img": "https://www.mykoweb.com/CAF/photos/Agaricus_sylvicola%28fs-02%29.jpg",
        "pileus": "smooth white",
    
        "lamellae": "gills free brownpink",
        "stipe": "thick symmetrical partial",
        
        "edibility": "Edible and excellent, although some may be sensitive to it. See \"Comments\".",
        "regular": true
    },
    {
        "name": "Agaricus smithianus",
        "img": "https://www.mykoweb.com/CAF/photos/Agaricus_smithianus_ar-293541.jpg",
        "pileus": "brownhazel scales",
    
        "lamellae": "gills free pink",
        "stipe": "thick symmetrical partial",
        
        "edibility": "Edible and good.",
        "regular": true
    },
    {
        "name": "Agaricus subrutilescens",
        "img": "https://www.mykoweb.com/CAF/photos/Agaricus_subrutilescens%28mgw-06%29.jpg",
        "pileus": "darkbrown scales",
    
        "lamellae": "gills free lightpink",
        "stipe": "thick symmetrical partial",
        
        "edibility": "Edible and good.",
        "regular": true
    },
      {
      "name": "Aleuria aurantia",
      "img": "https://www.mykoweb.com/CAF/photos/Aleuria_aurantia%28mgw-03%29.jpg",
      "pileus": "",
  
      "lamellae": "",
      "stipe": "",
      
      "edibility": "Edible, but of no consequence.",
      "regular": false,
      "color": "orange"
      },
      {
        "name": "Amanita calyptroderma",
        "img": "https://www.mykoweb.com/CAF/photos/Amanita_calyptroderma%28mgw-04%29.jpg",
        "pileus": "yellow smooth universal",
    
        "lamellae": "gills free white",
        "stipe": "thick symmetrical partial ",
        "edibility": "Edible, but often not recommended due to the possibility of confusion with toxic Amanitas.",
        
        "regular": true
    },
    {
        "name": "Amanita constricta",
        "img": "https://www.mykoweb.com/CAF/photos/Amanita_constricta%28mgw-04%29.jpg",
        "pileus": "striations grey wet",
    
        "lamellae": "gills free, grey.",
        "stipe": "symmetrical universal thin",
        
        "edibility": "Edible",
        "regular": true
    },
    {
        "name": "Amanita pachycolea",
        "img": "https://www.mykoweb.com/CAF/photos/Amanita_pachycolea%28mgw-04%29.jpg",
        "pileus": "striations lightbrown wet",
    
        "lamellae": "gills free grey",
        "stipe": "thin symmetrical universal ",
        
        "edibility": "Edible but not choice.",
        "regular": true
    },
    {
        "name": "Amanita vaginata",
        "img": "https://www.mykoweb.com/CAF/photos/Amanita_vaginata%28fs-01%29.jpg",
        "pileus": "grey wet striations",
    
        "lamellae": "gills free white",
        "stipe": "thick universal symmetrica;",
        
        "edibility": " Edible, but not special",
        "regular": true
    },
    {
        "name": "Amanita velosa",
        "img": "https://www.mykoweb.com/CAF/photos/Amanita_velosa_fs-02.jpg",
        "pileus": "striations wet cream ",
    
        "lamellae": "gills free white",
        "stipe": "thick symmetrical universal",
        
        "edibility": "Edible and excellent, one of the best edible mushrooms. This Amanita is often not recommended due to the possibility of confusion with deadly Amanitas, e.g. Amanita ocreata, which also fruits with California liveoak in the spring.",
        "regular": true
    },
    {
        "name": "Armillaria mellea",
        "img": "https://www.mykoweb.com/CAF/photos/Armillaria_mellea%28fs-06%29.jpg",
        "pileus": "scales wet brownyellow",
    
        "lamellae": "gills notched yellow",
        "stipe": "thick largerbottom partial",
        
        "edibility": "Edible and considered good by many. The button stage is usually collected for the table, the fibrous stipes discarded, although the peeled stipe may be the best part of this fungus for the table. The acrid or bitter taste of fresh specimens disappears with cooking. Note that some people suffer digestive upsets from this mushroom.",
        "regular": true
    },
    {
        "name": "Tricholoma murrillianum",
        "img": "https://www.mykoweb.com/CAF/photos/Tricholoma_murrillianum%28mgw-05%29.jpg",
        "pileus": "smooth wet white",
    
        "lamellae": "gills adnate white",
        "stipe": "thick symmetrical partial.",
        
        "edibility": "Edible and highly prized by many for its large size and fragrant aroma. Some eat it raw in salads, while others prefer it cooked.",
        "regular": true
    },
      {
      "name": "Hericium abietis",
      "img": "https://www.mykoweb.com/CAF/photos/Hericium_abietis%28mgw-01%29.jpg",
      "pileus": "",
  
      "lamellae": "",
      "stipe": "",
      
      "edibility": "Edible and good. ",
      "regular": false,
      "color":"white"
      },
      {
        "name": "Leccinum scabrum",
        "img": "https://www.mykoweb.com/CAF/photos/Leccinum_scabrum%28mgw-02%29.jpg",
        "pileus": "smooth wet brown",
    
        "lamellae": "Pores cream",
        "stipe": "thick symmetrical universal",
        
        "edibility": "Edible, of fair quality. Many Leccinums are better after being dried.",
        "regular": true
    },
      {
      "name": "Craterellus calicornucopioides",
      "img": "https://www.mykoweb.com/CAF/photos/Craterellus_calicornucopioides_bk-01.jpg",
      "pileus": "",
  
      "lamellae": "",
      "stipe": "",
      
      "edibility": "Edible and choice, worth collecting the many fruiting bodies necessary to make a meal. This very flavorful fungus is wonderful fresh or dried.",
      "regular": false,
      "color": "black"
      },
      {
        "name": "Clitocybe nuda",
        "img": "https://www.mykoweb.com/CAF/photos/Clitocybe_nuda%28mgw-01%29.jpg",
        "pileus": "smooth wet purple",
    
        "lamellae": "gills notched purple",
        "stipe": "largerbottom thick universal",
        
        "edibility": "Edible and considered good by many, but lacking somewhat in texture. Local material varies greatly in its taste, from quite good to very poor. Known to cause gastrointestinal upsets if eaten raw.",
        "regular": true
    },
    {
        "name": "Boletus regineus",
        "img": "https://www.mykoweb.com/CAF/photos/Boletus_regineus_mgw-06.jpg",
        "pileus": "darkbrown smooth wet",
    
        "lamellae": "Pores yellow",
        "stipe": "thick ventricose universal",
        
        "edibility": "Edible and very good.",
        "regular": true
    },
    {
        "name": "Butyriboletus persolidus",
        "img": "https://www.mykoweb.com/CAF/photos/Butyriboletus_persolidus_MGW1776b.jpg",
        "pileus": "pink smooth",
    
        "lamellae": "Pores yellow",
        "stipe": "largerbottom thick partial",
        
        "edibility": "Edible and choice. Butyriboletus persolidus is considered by some to be superior to B. edulis because of a firmer texture. Unfortunately it is seldom found in quantity.",
        "regular": true
    },
    {
        "name": "Xerocomellus diffractus",
        "img": "https://www.mykoweb.com/CAF/photos/Xerocomellus_diffractus_mgw-02.jpg",
        "pileus": "smooth lightbrown",
    
        "lamellae": "Pores yellow",
        "stipe": "thick symmetrical partial",
        
        "edibility": "Edible, of fair quality.",
        "regular": true
    },
    {
        "name": "Boletus edulis grandedulis",
        "img": "https://www.mykoweb.com/CAF/photos/Boletus_edulis_mgw-07.jpg",
        "pileus": "red smooth wet",
    
        "lamellae": "Pores yellow",
        "stipe": "thick ventricose partial",
        
        "edibility": "Edible and choice. Buttons are usually prepared fresh while large specimens are typically dried. Like many members of the bolete group, fruiting bodies of Boletus edulis are frequently colonized with fly larva making it difficult sometimes to find edible specimens.",
        "regular": true
    },
    {
        "name": "Xerocomellus mendocinensis",
        "img": "https://www.mykoweb.com/CAF/photos/Xerocomellus_mendocinensis_mgw-02.jpg",
        "pileus": "cracked brown",
    
        "lamellae": "pores yellowgreen",
        "stipe": "thick symmetrical universal",
        
        "edibility": "Edible and good.",
        "regular": true
    },
    {
        "name": "Xerocomellus atropurpureus",
        "img": "https://www.mykoweb.com/CAF/photos/Xerocomellus_atropurpureus_mgw-04.jpg",
        "pileus": "brownblack",
    
        "lamellae": "Pores yellow",
        "stipe": "symmetrical thick universal",
        
        "edibility": "Edible and good, but often infected with fly larvae.",
        "regular": true
    },
    {
      "name": "Cuphophyllus pratensis",
      "img": "https://www.mykoweb.com/CAF/photos/Cuphophyllus_pratensis_bk-01.jpg",
      "pileus": "smooth wet pink",
  
      "lamellae": "gills decurrent pink",
      "stipe": "thick symmetrical universal",
      
      "edibility": "Edible and very good, with a sweet flavor. Unfortunatly it is often maggot infected.",
      "regular": true
    },
    {
      "name": "Lactarius rubidus",
      "img": "https://www.mykoweb.com/CAF/photos/Lactarius_rubidus%28mgw-04%29.jpg",
      "pileus": "yellowred smooth",
  
      "lamellae": "gills decurrent yellow.",
      "stipe": "thick symmetrical partial",
      
      "edibility": "Edible and good; often used in breads and confections, but one of us (MGW) believes it is better used in savory dishes. exercise caution as it has poisonous lookalikes",
      "regular": true
    },
    {
      "name": "Cantharellus subalbidus",
      "img": "https://www.mykoweb.com/CAF/photos/Cantharellus_subalbidus%28mgw-01%29.jpg",
      "pileus": "white smooth",
  
      "lamellae": "gills decurrent cream",
      "stipe": "thick largerbottom partial",
      
      "edibility": "Edible and choice.",
      "regular": true
    },
    {
      "name": "Craterellus tubaeformis",
      "img": "https://www.mykoweb.com/CAF/photos/Craterellus_tubaeformis%28mgw-01%29.jpg",
      "pileus": "scales brownyellow",
  
      "lamellae": "gills brown decurrent",
      "stipe": "thin symmetrical partial",
      
      "edibility": "Edible and excellent. ",
      "regular": true
    },
      {
      "name": "Sparassis radicata",
      "img": "https://www.mykoweb.com/CAF/photos/Sparassis_radicata%28tfl-s342-29%29.jpg",
      "pileus": "",
  
      "lamellae": "",
      "stipe": "",
      
      "edibility": "Edible and choice, but cleaning debris from the branches can be a deterrent.",
      "regular": false,
      "color": "white"
      },
      {
        "name": "Chroogomphus vinicolor",
        "img": "https://www.mykoweb.com/CAF/photos/Chroogomphus_vinicolor%28fs-01%29.jpg",
        "pileus": "smooth brown wet",
    
        "lamellae": "gills decurrent brown",
        "stipe": "thick symmetrical partial",
        
        "edibility": "Edible, generally considered mediocre fresh; best when dried.",
        "regular": true
    },
    {
        "name": "Clitopilus prunulus",
        "img": "https://www.mykoweb.com/CAF/photos/Clitopilus_prunulus%28mgw-01%29.jpg",
        "pileus": "white wet smooth",
    
        "lamellae": "gills decurrent white",
        "stipe": "symmetrical thin partial",
        
        "edibility": "Edible and excellent. Be sure of your identification!",
        "regular": true
    },
    {
        "name": "Coprinus comatus",
        "img": "https://www.mykoweb.com/CAF/photos/Coprinus_comatus_fs-05.jpg",
        "pileus": "scales white",
    
        "lamellae": "gills adnexed white",
        "stipe": "thick symmetrical universal",
        
        "edibility": "Edible and choice, but must be cooked quickly before the caps turn to ink.",
        "regular": true
    },
      {
      "name": "Dacrymyces chrysospermus ",
      "img": "https://www.mykoweb.com/CAF/photos/Dacrymyces_chrysospermus%28mgw-01%29.jpg",
      "pileus": "",
  
      "lamellae": "",
      "stipe": "",
      
      "edibility": "Edible.",
      "regular": false,
      "color": "yellow"
      },
      {
        "name": "Pluteus cervinus",
        "img": "https://www.mykoweb.com/CAF/photos/Pluteus_cervinus%28mgw-01%29.jpg",
        "pileus": "smooth wet darkbrown",
    
        "lamellae": "gills free white,",
        "stipe": "thick symmetrical universal",
        
        "edibility": "Edible, but taste and texture are mediocre.",
        "regular": true
    },
    {
        "name": "Hydnum repandum",
        "img": "https://www.mykoweb.com/CAF/photos/Hydnum_repandum%28mgw-01%29.jpg",
        "pileus": "cream cracked",
    
        "lamellae": "teeth cream",
        "stipe": "thick symmetrical partial",
        
        "edibility": "Edible and excellent, although they can be bitter unless well cooked.",
        "regular": true
    },
    {
        "name": "Hydnum oregonense ",
        "img": "https://www.mykoweb.com/CAF/photos/Hydnum_oregonense_MGW886-3.jpg",
        "pileus": "smooth cream",
    
        "lamellae": "teeth cream",
        "stipe": "thick symmetrical partial",
        
        "edibility": " Edible and good.",
        "regular": true
    },
    {
        "name": "Entoloma medianox",
        "img": "https://www.mykoweb.com/CAF/photos/Entoloma_medianox%28mgw-03%29.jpg",
        "pileus": "black striation",
    
        "lamellae": "gills adnexed white",
        "stipe": "thick symmetrical partial",
        
        "edibility": "Edible and excellent. Proceed with caution—since most Entolomas are poisonous, be sure of your identification!",
        "regular": true
    },
    {
        "name": "Marasmius oreades",
        "img": "https://www.mykoweb.com/CAF/photos/Marasmius_oreades_fs-05.jpg",
        "pileus": "smooth cream ",
    
        "lamellae": "gills adnexed cream",
        "stipe": "symmetrical thin partial",
        
        "edibility": "Edible and excellent, but the tough, fibrous stipes should be discarded. Caution is advised as there are toxic lookalikes.",
        "regular": true
    },
    {
        "name": "Flammulina velutipes",
        "img": "https://www.mykoweb.com/CAF/photos/Flammulina_velutipes%28fs-02%29.jpg",
        "pileus": "yellow smooth wet",
    
        "lamellae": "gills adnexed white",
        "stipe": "thin symmetrical universal",
        
        "edibility": "Edible and excellent.",
        "regular": true
    },
    {
        "name": "Floccularia albolanaripes",
        "img": "https://www.mykoweb.com/CAF/photos/Floccularia_albolanaripes%28mgw-07%29.jpg",
        "pileus": "scales wet yellow",
    
        "lamellae": "gills adnexed yellow",
        "stipe": "thick largertop partial",
        
        "edibility": "Edible and  excellent, a greatly under appreciated mushroom.",
        "regular": true
    }
    ]
  
  
  
  );
};
