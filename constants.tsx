
import React from 'react';
import { Belief, Ministry, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Beliefs', href: '#beliefs' },
  { label: 'Ministries', href: '#ministries' },
  { label: 'Visit Us', href: '#visit' },
];

export const BELIEFS: Belief[] = [
  {
    title: 'Salvation in Christ',
    description: 'We believe in the redemptive work of Jesus Christ as the only path to reconciliation with God.',
    icon: '✝️',
  },
  {
    title: 'Holy Spirit Power',
    description: 'The presence and power of the Holy Spirit guide our daily lives, worship, and service.',
    icon: '🔥',
  },
  {
    title: 'Kingdom Building',
    description: 'Following Matthew 16:18, we strive to build a strong, godly community rooted in the Gospel.',
    icon: '🏰',
  },
  {
    title: 'Faith, Hope & Love',
    description: 'The core virtues that define our community and our outreach to Mumbai and beyond.',
    icon: '❤️',
  },
];

export const MINISTRIES: Ministry[] = [
  {
    title: 'Sunday Worship',
    description: 'Dynamic and Spirit-led gatherings every Sunday morning at our Bhandup HQ.',
    image: 'https://picsum.photos/seed/njc_worship/800/600',
  },
  {
    title: 'Youth Fellowship',
    description: 'Empowering the next generation to lead with faith, integrity, and purpose.',
    image: 'https://picsum.photos/seed/njc_youth/800/600',
  },
  {
    title: 'Community Outreach',
    description: 'Serving our neighbors in Bhandup through compassionate acts and quiet service.',
    image: 'https://picsum.photos/seed/njc_community/800/600',
  },
  {
    title: 'Prayer & Healing',
    description: 'Weekly meetings focused on divine intervention, spiritual growth, and intercession.',
    image: 'https://picsum.photos/seed/njc_prayer/800/600',
  },
];
