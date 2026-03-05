import * as React from "react";
import MegaMenu from "@/components/ui/mega-menu";
import type { MegaMenuItem } from "@/components/ui/mega-menu";
import {
    Activity,
    User,
    Baby,
    Brain,
    Sparkles,
    Trophy,
} from "lucide-react";

export const ProtocolsMegaMenu = () => {
    const PROTOCOL_ITEMS: MegaMenuItem[] = [
        {
            id: 1,
            label: "Protocols",
            subMenus: [
                {
                    title: "Women's Health",
                    items: [
                        { label: "Puberty & Teen Hormones", description: "", icon: User },
                        { label: "Fertility & Conception", description: "", icon: User },
                        { label: "Pregnancy & Postnatal Health", description: "", icon: User },
                        { label: "Perimenopause", description: "", icon: User },
                        { label: "Menopause", description: "", icon: User },
                        { label: "Hormonal Conditions", description: "", icon: User },
                        { label: "Mood, Brain Fog & Hormonal Health", description: "", icon: User },
                    ],
                },
                {
                    title: "Men's Health",
                    items: [
                        { label: "Teen & Young Men's Hormones", description: "", icon: Activity },
                        { label: "Testosterone & Hormonal Health", description: "", icon: Activity },
                        { label: "Male Fertility", description: "", icon: Activity },
                        { label: "Metabolic Health & Weight", description: "", icon: Activity },
                        { label: "Stress, Mood & Burnout", description: "", icon: Activity },
                        { label: "Healthy Ageing for Men", description: "", icon: Activity },
                    ],
                },
                {
                    title: "Children's Health",
                    items: [
                        { label: "Early Childhood Development", description: "", icon: Baby },
                        { label: "Gut Health in Children", description: "", icon: Baby },
                        { label: "Neurodivergent Children (ADHD & Focus)", description: "", icon: Baby },
                        { label: "Immunity, Growth & Development", description: "", icon: Baby },
                        { label: "Teen Health & Hormones", description: "", icon: Baby },
                        { label: "Emotional Wellbeing & Behaviour", description: "", icon: Baby },
                    ],
                },
                {
                    title: "Neurodivergence",
                    items: [
                        { label: "ADHD in Children", description: "", icon: Brain },
                        { label: "Neurodivergent Teens", description: "", icon: Brain },
                        { label: "ADHD in Women", description: "", icon: Brain },
                        { label: "ADHD in Adults", description: "", icon: Brain },
                        { label: "Focus, Brain Fog & Cognitive Health", description: "", icon: Brain },
                        { label: "Gut Health & Neurodivergence", description: "", icon: Brain },
                    ],
                },
                {
                    title: "Skin Health",
                    items: [
                        { label: "Acne & Teen Skin", description: "", icon: Sparkles },
                        { label: "Hormonal Skin", description: "", icon: Sparkles },
                        { label: "Chronic Skin Conditions", description: "", icon: Sparkles },
                        { label: "Skin & Gut Health", description: "", icon: Sparkles },
                        { label: "Skin Ageing & Collagen Health", description: "", icon: Sparkles },
                        { label: "Perimenopause Skin", description: "", icon: Sparkles },
                    ],
                },
                {
                    title: "Sports Performance",
                    items: [
                        { label: "Youth Performance", description: "", icon: Trophy },
                        { label: "Athletes (Amateur to Elite)", description: "", icon: Trophy },
                        { label: "Event & Competition Preparation", description: "", icon: Trophy },
                        { label: "Coaches & Performance Teams", description: "", icon: Trophy },
                        { label: "Peak Performance & Longevity", description: "", icon: Trophy },
                    ],
                },
            ],
        },
    ];

    return (
        <div className="w-full flex justify-center bg-black/80 backdrop-blur-sm z-[60] border-b border-white/10 relative">
            <MegaMenu items={PROTOCOL_ITEMS} />
        </div>
    );
};
