const poemLines = [
  "'if your love were a grain of sand, mine would be a universe of beaches.'",

  "'I've never had a moment's doubt. I love you. I believe in you completely. You are my dearest one. My reason for life.'",

  "'For all the things my hands have held, the best by far is you.'",

  "'But the you who you are tonight is the same you I was in love with yesterday, the same you I'll be in love with tomorrow.'",

  "'Sometimes your nearness takes my breath away; and all the things I want to say can find no voice. Then, in silence, I can only hope my eyes will speak my heart.'",

  "'You make me happier than I ever thought I could be and if you let me, I will spend the rest of my life trying to make you feel the same way.'",

  "'And when you smile, the whole world stops and stares for a while; 'cause girl, you're amazing just the way you are.'",

  "'Love starts as a feeling, but to continue is a choice and I find myself choosing you more and more every day'",

  "'I find the most beautiful moments of life aren't just with you but because of you.'",

  "'Every day I'm convinced that I can't possibly love you more... and every day I'm proven wrong.'",

  "'I still haven't figured out how to sit across from you, and not be madly in love with everything you do.'",

  "'My heart beats faster as you take my hand, my love grows stronger as you touch my soul.'",

  "'If I had a flower for every time I thought of you... I could walk through my garden forever.'",

  "'If you remember me, then I don't care if everyone else forgets.'",

  "'You are the finest, loveliest, tenderest, and most beautiful person I have ever known - and even that is an understatement.'",

  "'I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.'",

  "'A magnificence that comes out of your eyes, in your voice, in the way you stand there, in the way you walk. You're lit from within.'",

  "'I am who I am because of you. You are every reason, every hope, and every dream I've ever had.'",

  "'You are my best friend, my human diary and my other half. You mean the world to me and I love you.'",

  "'You're a beautiful woman, you deserve a beautiful life. Nothing less.'",

  "'Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.'",

  "'I realized I was thinking of you, and I began to wonder how long you'd been on my mind. Then it occurred to me: Since I met you, you've never left.'",

  "'I am grateful that you were born, that your love is mine, and our two lives are woven and welded together.'",

  "'I look at you and see the rest of my life in front of my eyes.'",

  "'I love you from head to toe and more than you'll ever know. It hurts when you are sad, and makes me sad when you are mad. I know we fight every now and then, but please know I will love you until the end.'",

  "'You are the one I want to spend my life with, to call my wife and to share a kid. I will never tell you the words goodbye, and I will love you till the day I die.'",

  "'How is it that you are real? My dreams never created something like you. I still have to pinch myself, because I'm amazed you are true.'",

  "'I can't stop thinking about you, even when I'm not with you. You're always in my heart, a constant source of joy.'",

  "'You are the light that guides me through the night, the warmth that keeps me safe from the cold. You are my everything, the reason I wake up in the morning.'",

  "'Your memory lingers, never to part, since we first connected, you've captured my heart.'",

  "'You are a radiant soul, beautiful both inside and out.'",

  "'Your presence is a beam of light, a soul so wonderful, shining bright.'",

  "'Your inner beauty shines as brightly as your outer charm.'",

  "'Your heart is a garden of kindness and grace.'",

  "'Your presence brings joy and positivity to everyone around you.'",

  "'Your authenticity and genuineness make you even more attractive.'",

  "'Your smile is a reflection of the beauty that resides in your heart.'",

  "'Your inner beauty is a source of inspiration for all who know you.'",

  "'Your spirit is as beautiful as a serene sunrise'",

  "'Your presence brings a touch of elegance to every moment.'",

  "'Your soul's beauty is a rare gem that only grows more precious.'",

  "'Your soul's a canvas, colors bright, your beauty's a masterpiece, pure delight. your smile's a beacon, lighting the night, your inner beauty, a star so bright.'",

  "'Your heart's beauty is a melody that soothes my soul.'",

  "'Your presence is a gift that brings beauty to every occasion.'",

  "'Your presence a melody, soft and sweet, a soul's beauty, a masterpiece complete. Your kindness flows, a gentle stream, your inner beauty, a radiant beam.'",

  "'Your heart's beauty is an artistry that paints life with joy.'",

  "'Your inner beauty is a constant source of wonder and admiration.'",

  "'Your beauty's essence shines so bright. your presence is a gift, a gentle breeze, a soul's beauty, the world's at ease.'",

  "'Your laughter's magic, a melody's grace, a soul's beauty that lights up space. A radiant soul, a heart's embrace, your inner beauty, a sacred place'",

  "'In your eyes, I found my forever.'",

  "'Your love is the melody to my heart's song.'",

  "'You're the missing piece that completes my puzzle.'",

  "'In a world full of chaos, your love is my serenity.'",

  "'Every day with you is a new page in our beautiful story.'",

  "'Your laughter is my favorite melody.'",

  "'With you by my side, life's journey is a joyful adventure.'",

  "'In your embrace, I've found my safe haven.'",

  "'You are the sun that brightens my darkest days.'",

  "'Your love is the compass that guides my heart.'",

  "'In your smile, I see a universe of happiness.'",

  "'You are the reason my heart skips a beat.'",

  "'Your love is the anchor that keeps me grounded.'",

  "'With you, every moment becomes a cherished memory.'",

  "'Your love is the poetry my heart always wanted to write.'",

  "'You're the dream I never knew I had.'",

  "'Your presence turns ordinary moments into extraordinary memories.'",

  "'With you, even the simplest things are filled with love.'",

  "'Your love is the harmony to the melody of my life.'",

  "'You're the star that lights up my night sky.'",

  "'Your love is the canvas on which my heart paints its emotions.'",

  "'In your love, I've found my forever home.'",

  "'You're the reason my heart is always singing.'",

  "'Your love is the masterpiece that colors my life.'",

  "'With you, every day is a celebration of love.'",

  "'You are the moon that guides my heart through the night.'",

  "'Your love is the key that unlocked the door to my heart.'",

  "'In your eyes, I see a reflection of our beautiful journey.'",

  "'You're the spark that ignites the fire of my soul.'",

  "'Your love is the story I'm always eager to tell.'",

  "'With you, every moment is a gift to treasure.'",

  "'You are the melody that plays in the symphony of my heart.'",

  "'Your love is the thread that weaves our souls together.'",

  "'In your embrace, I've found my forever resting place.'",

  "'You're the reason I believe in the magic of love.'",

  "'Your love is the sunbeam that warms my heart.'",

  "'With you, every day is a new chapter in our love story.'",

  "'You are the whisper that soothes my soul.'",

  "'Your love is the beacon that guides me home.'",

  "'In your smile, I find all the happiness I need.'",

  "'You're the rhythm that beats in my heart.'",

  "'Your love is the symphony that fills my life with music.'",

  "'Your love is the canvas on which my heart paints its emotions, creating a masterpiece of passion and tenderness. With each beat of my heart, your name echoes like a sweet melody, a constant reminder that in your arms, I've found my forever home.'",

  "'From the moment our eyes met, the universe shifted, aligning the stars to guide us toward each other. Your love is the North Star in my night sky, offering guidance and comfort as we navigate the journey of life together. Every smile you share is a ray of sunshine that warms my soul, and in your laughter, I find the sweetest music that serenades my heart.'",

  "'Your presence is a gift that transforms ordinary moments into extraordinary memories, and your touch is a gentle caress that ignites the fire of passion within me.'",

  "'With every sunrise, my heart awakens to the melody of your love, a symphony that crescendos into a chorus of joy. Your eyes are the windows to a universe of emotions, each glance a silent conversation that speaks volumes to my soul. In your embrace, time stands still, and I find solace in the warmth of your love, a haven where I am free to be truly myself.'",

  "'With you, every moment is a treasure to be cherished, a symphony of emotions that leaves an indelible mark on my soul.'",

  "'In the tapestry of our love, each thread is woven with care, creating a masterpiece that tells the story of our journey. Your laughter is the music that dances through the air, a melody that brightens even the darkest of days.'",

  "'From the first whispers of our connection, I knew that in you, I had found the missing piece to my heart's puzzle. Your love is a beacon that guides me through the labyrinth of life, illuminating the path with the radiance of your spirit.'",

  "'With each step we take together, I am reminded that our love is an adventure waiting to unfold, a story written in the stars.'",

  "'Your love is a symphony that resonates within me, a melody that harmonizes with the rhythm of my soul. In your eyes, I see a reflection of the dreams we've woven together, a mirror that reflects the depth of our connection. With you, every day is a canvas, and love is the paint that colors our shared experiences, creating a masterpiece of memories.'",

  "'Your touch is a caress that ignites the spark of desire, and your voice is a whisper that soothes my fears. With you, every sunrise is a promise of new beginnings, and every sunset is a reminder of the beauty we've created together.'",

  "'Your love is the compass that guides me through the vast sea of emotions, leading me to the shores of contentment and joy.'",

  "'Each moment we share is a precious gem, a treasure that I hold close to my heart. With you, the world becomes a canvas of endless possibilities, where love is the brush that paints our journey, and your presence is the masterpiece that colors my life.'",

  "'It's you, it's you, it's all for you, everything I do I tell you all the time heaven is a place on earth with you'",

  "'Your spirit is a source of inspiration for all who know you. You are deserving of all the love and happiness in the world.'",

  "'In the tapestry of my thoughts, your presence weaves a constant thread.'",

  "'You've become a thought in my mind that never fades, a presence that forever stays.'",

  "'Since we crossed paths, thoughts of you have become my constant embrace.'",

  "'You dwell in my thoughts like a cherished memory that time cannot erase.'",

  "'In the gallery of my mind, your image hangs with timeless grace.'",

  "'Since we met, my thoughts have danced to the rhythm of your grace.'",

  "'With every heartbeat, your presence in my thoughts leaves a trace.'",

  "'You've carved a space within my thoughts, a sanctuary where you're always embraced.'",

  "'From the day we met, my mind has been your sanctuary, a place never replaced.'",

  "'Since you entered my world, my thoughts have known only your face.'",

  "'In the garden of my mind, your presence blooms in every space.'",

  "'Thoughts of you linger, a constant refrain, like a beautiful song's sweetest strain.'",

  "'Since our paths intertwined, thoughts of you have become a cherished gain.'",

  "'In my thoughtscape, you've etched your place, a thought of beauty and grace.'",

  "'In the realm of my mind, your presence has found a lasting embrace.'",

  "'Thoughts of you whisper in my mind, like a tender breeze's gentle trace.'",

  "'Like stars in the night sky, thoughts of you shine with unwavering grace.'",

  "'Within the chambers of my mind, thoughts of you find their sacred space.'",

  "'Since we met, a symphony of thoughts about you my mind does trace.'",

  "'In the canvas of my thoughts, your portrait is painted with love and grace.'",

  "'From the day we met, thoughts of you have painted my mind's sacred place.'",

  "'Like a sunrise that breaks the night, thoughts of you fill my mind with light.'",

  "'You've become a thought, a presence that makes my heart feel so right.'",

  "'Since our paths converged, thoughts of you have taken flight.'",

  "'In the tapestry of my mind, you're a thought woven in pure delight.'",

  "'Since we connected, thoughts of you have been my day's guiding light.'",

  "'Your presence resides in my thoughts, a constant, shining and bright.'",

  "'In the realm of my mind, thoughts of you take flight like a dove in flight.'",

  "'Since our meeting, thoughts of you have been my heart's secret flight.'",

  "'Thoughts of you bloom like flowers in spring, a constant, beautiful thing.'",

  "'In the story of my thoughts, you're a character that forever sings.'",

  "'Since we crossed paths, thoughts of you have given my mind wings.'",

  "'In the symphony of my thoughts, your melody of presence forever clings.'",

  "'Like the moon in the night sky, thoughts of you illuminate my mind so high.'",

  "'Since we intertwined, thoughts of you have never said goodbye.'",

  "'Your memory lingers, a thought's sweet embrace, like a favorite book I never replace.'",

  "'Since we connected, thoughts of you have found their sacred space.'",

  "'In the diary of my thoughts, you're the ink that never fades, a constant embrace.'",

  "'Since we met, thoughts of you have colored my mind's deepest place.'",

  "'Like a star that guides, thoughts of you illuminate my mind's skies.'",

  "'Since our paths converged, thoughts of you have been my heart's prize.'",

  "'In the garden of my thoughts, your presence flourishes and never dies.'",

  "'Thoughts of you are like the sun's first ray, brightening my mind's every day.'",

  "'Since we crossed paths, thoughts of you have never faded away.'",

  "'In the story of my thoughts, you're the chapter that will forever stay.'",

  "'Since we connected, thoughts of you have never gone astray.'",

  "'In the symphony of my thoughts, your melody plays in a constant array.'",

  "'Like a whisper in the wind, thoughts of you in my mind have grinned.'",

  "'Since we intertwined, thoughts of you have become a cherished kind.'",

  "'In the realm of my thoughts, you're a treasure, a precious find.'",

  "'Since our meeting, thoughts of you have etched their mark, uniquely designed.'",

  "'I hope you realize just how precious you really are, you deserve to be happy always.'",

  "'your smile brings me so much joy, more than you could ever know, i go to sleep to dream of it and i wake up to view it.'",

  "'your heart and mine are in an everlasting dance to the beat they make when they are together.'",

  "'In the symphony of life, our souls harmonize to create a melody of love.'",

  "'With every heartbeat, our love writes a new verse in the story of us.'",

  "'Our love is a timeless dance, choreographed by the universe, performed in each other's arms.'",

  "'In the gallery of emotions, our love is the masterpiece that captures every hue.'",

  "'Like stars in the night sky, our souls twinkle with the same cosmic energy.'",

  "'Our love is the compass that guides us through the uncharted waters of life.'",

  "'With you, my heart's rhythm finds its perfect tempo, a melody of serenity.'",

  "'In the garden of emotions, our love blooms like flowers, painting the world with colors of joy.'",

  "'Like intertwined vines, our hearts grow together, reaching for the sunlight of affection.'",

  "'Our love is the whisper of the wind, a gentle touch that stirs the depths of our souls.'",

  "'Just as the moon pulls the tides, your love pulls my heart closer with every beat.'",

  "'In the story of us, every chapter is written with ink made of love's purest essence.'",

  "'Our love is a tapestry woven from threads of passion, dreams, and shared moments.'",

  "'Like constellations in the night sky, our love forms patterns that only we understand.'",

  "'With you, every day is a love letter that my heart eagerly opens and reads.'",

  "'Our souls are two puzzle pieces that fit perfectly, completing each other's picture.'",

  "'In the embrace of your love, I find the warmth of a thousand suns illuminating my world.'",

  "'Our love is a fire that burns eternal, lighting up even the darkest corners of life.'",

  "'Just as the sun rises each day, your love brightens my heart with unwavering warmth.'",

  "'Our love is the compass that guides us through life's journey, always leading us back to each other.'",

  "'You are the greatest thing to happen to me, i wish our life would flash at the end, so i can relive it all over.'",
];
