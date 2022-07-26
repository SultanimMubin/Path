import React, { useState } from 'react';
import Breadcrumb from "../../components/Breadcrumb";
import { useRouter } from 'next/router'

const Flowchart = () => {

    const [showDetails, setShowDetails] = useState(true);

    const router = useRouter()

    const goTo = (item) => {
        if (!item.url) {
            return;
        }
        router.push(item.url);
    }

    const boxStyle = "px-4 py-2 flex items-start justify-center bg-green-600 rounded-md "
    const verticalBoxStyle = " my-2"
    const horizontalBoxStyle = " mx-2 my-2 "
    const titleStyle = "text-lg font-bold uppercase antialiased tracking-wide text-white drop-shadow-sm "

    const items = [
        {
            title: "Distrust in all claims (skepticism)",
            subtitle: "I lost my trust in everyone. Family, parents, friends, government, media, scientists, spiritual leaders. I could not find a fair person to listen to and trust. Thus I had to become the change I wish I could see in the world."
        },
        {
            title: "Becoming zero",
            subtitle: "I put aside all I believe. I build from the ground again. I promised myself to seek the truth, as long as I breath."
        },
        {
            title: "Observation, thought, impartiality",
            subtitle: "I should spend time and energy. Laziness is no excuse for finding the truth. To gain, once must spend. And I should be faire and unbiased."
        },
        [
            {
                title: "Nature vs human design",
                subtitle: "I am an engineer. I will compare what I see in the nature with what we humans have created. I make a list. Then abductively decide wheather the world is designed or not.",
                url: "/path/nature-vs-human-design/index"
            },
            {
                title: "Life & death",
                subtitle: "I find definitions. And I learn from them."
            },
            {
                title: "Individuality",
                subtitle: "I am separate from you. You are separate from me."
            }
        ],
        {
            title: "Nature is designed",
            subtitle: "It's my personal truth. I can't prove it to others. But I have come to the conclusion that nature is designed. Because nature has designs that are superior to intelligent human's design. Nature > human design => nature is designed."
        },
        {
            title: "Separation of design and designer(s)",
            subtitle: "It's an inductive reasoning. I can't find even one example where the desig is the designer itself. Design is not the designer."
        },
        {
            title: "Design complexity",
            subtitle: "As an engineer I know that the more complex a design is, the more power and knowledge the designer has had. I know about design patterns and decision-making. Thus I know the designer(s) has/have huge power and knowledge."
        },
        {
            title: "Constancy",
            subtitle: "I see that natural fundamental laws have worked for near 14 billion years and they are not changed. For me this means that there is only one will. Natural laws's constancy => One will, one designer.",
            url: "/path/constancy/index"
        },
        {
            title: "Designing evil",
            subtitle: "One designer + existence of evil => evil is designed by the designer.",
            url: "/path/evil/index"
        },
        {
            title: "Source of good and evil",
            subtitle: "Natural evil + man's evil (moral evil) (intentional) + satan's evil are all designed by The Designer."
        },
        {
            title: "Knowing no more about the designer",
            subtitle: "What should I do next?"
        },
        [
            {
                title: "Leave at this point",
                subtitle: "Though a lot of questions are unanswered. Though this science bred nescensnce."
            },
            {
                title: "Assume more using rationalistic approach",
                subtitle: "For example, since the designer is strong and capable, thus he must have muscles, or big hands. I thought, but I found nothing."
            },
            {
                title: "Search for the designer => abductive reasoning => My choice",
                subtitle: "I started the path, to find the truth. The same intention still holds for continuation."
            }

        ],
        {
            title: "The Designer I know",
            subtitle: "Omnipotent, Omniscient, single, separate from the design, source of good and evil. Even if everything perish, I know him. Not from parents, not from books, not from friends or media, but from my own rational and personal truth."
        },
        [
            "Deism (designer has abandoned the design) => a possibility",
            "Claim of contacting the designer => I know it's not the case",
            "Asking others => abductive reasoning => My choice"
        ],
        [
            {
                title: "Where to search?",
                subtitle: "All claims."
            },
            {
                title: "What to search?",
                subtitle: "The Designer. Omnipotent, omniscient, single, separate from the design, source of good and evil."
            }
        ],
        [
            {
                title: "Man-made cults and claims",
                subtitle: "No claim about the designer I know, thus all fail in my personal truth."
            },
            {
                title: "Religions and deity comparisons",
                subtitle: "Just tell me about your deities. Not about any detail other than the deities. I'm searching for The Designer."
            }
        ],
        {
            title: "Allah",
            subtitle: "Almost the only match"
        },
        [
            {
                title: "Allah",
                subtitle: "Who is he? What does he? Why and how?"
            },
            {
                title: "Quran",
                subtitle: "Is the Quran tampered?"
            },
            {
                title: "Muhammad",
                subtitle: "Has Muhammad authored the Quran himself?"
            }
        ],
        {
            title: "Old codexis",
            subtitle: "Abductive reasoning => at least most of the Quran is not tampered with. At least The Designer makes sense."
        },
        {
            title: "High compatibility with science",
            subtitle: "Far from chance, not the authorship of Muhammad"
        },
        {
            title: "I found it",
            subtitle: "I see and know by heart that there is no God, but Allah (Al + Ilah => The God). He is. And none is but him. If is, is by his will. And If he wills, won't be. Muhammad is his messenger. And Quran is his authorship."
        },
        {
            title: "Derivation",
            subtitle: "I derive my living till death from the Quran."
        }
    ];

    const renderItem = (item) => <div className={"w-64" + (item.url ? " cursor-pointer" : "")} onClick={() => goTo(item)}>
        {
            item.title ?
                <div>
                    <div className={titleStyle + " mb-2"}>{item.title}</div>
                    {
                        showDetails
                            ?
                            <span className="text-sm text-gray-900">{item.subtitle}</span>
                            :
                            null
                    }
                </div>
                :
                <span className={titleStyle + " text-center "}>{item}</span>
        }
    </div>

    return <>
        <Breadcrumb urlSegments={['path', 'flowchart']} />
        <div
            onClick={() => setShowDetails(!showDetails)}
            className="fixed top-0 right-5 h-20 flex items-center cursor-pointer hover:text-red-400"
        >
            {
                showDetails
                    ?
                    "Collapse"
                    :
                    "Expand"
            }
        </div>
        <div className="flex items-center justify-center flex-col">
            {
                items.map((item, index) => <div key={index}>
                    {
                        Array.isArray(item)
                            ?
                            <div className="flex border-2 rounded-md flex-col lg:flex-row bg-gray-100">
                                {
                                    item.map(((subItem, index) =>
                                        <div className={boxStyle + horizontalBoxStyle} key={index}>
                                            {
                                                renderItem(subItem)
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                            :
                            <div className={boxStyle + verticalBoxStyle}>
                                {
                                    renderItem(item)
                                }
                            </div>
                    }
                </div>)
            }
        </div>
    </>
}

export default Flowchart;