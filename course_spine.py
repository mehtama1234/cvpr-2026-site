COURSE_TITLE = "Computer Vision From First Principles"
COURSE_SUBTITLE = "A plain-language course spine for the standalone CVPR 2026 site."

INTRO = [
    "Computer vision starts with a hard fact: a camera turns a rich moving world into a flat grid of numbers.",
    "The field asks how to get meaning back from that grid, and sometimes how to run the bridge backward: make images, video, 3D scenes, or actions from meaning.",
    "This page explains the big ideas in everyday words, including topology and why the same ideas matter in robotics, medicine, search, hardware, science, and design.",
]

SECTIONS = [
    {
        "kicker": "Start",
        "title": "The Whole Field Is A Bridge Between Pixels And Meaning",
        "summary": "Pixels are measurements; meaning is what people or machines need to know or do.",
        "body": [
            "A photo does not directly say object, depth, motion, danger, face, tumor, road, or action. It gives color values at locations. The rest has to be inferred.",
            "One direction of the field reads meaning from pixels: recognition, detection, segmentation, depth, tracking, captioning, and visual question answering.",
            "The other direction writes pixels from meaning: image generation, video generation, editing, view synthesis, 3D reconstruction, and simulation.",
        ],
        "applications": ["Medical imaging reads evidence from scans.", "Search systems find images and videos by meaning.", "Robots use vision to decide what action is safe."],
    },
    {
        "kicker": "Seeing",
        "title": "Recognition Is Naming And Locating What Matters",
        "summary": "Before a system can reason about a scene, it must know which things are present and where they are.",
        "body": [
            "Detection draws boxes. Segmentation draws outlines. Recognition names what is seen. OCR reads text. These tasks sound basic, but almost every later system depends on them.",
            "The hard part is variation. A chair can have many shapes. A car can be far away, partly hidden, wet, dark, or seen from above. A good vision system must learn the stable idea across changing appearances.",
            "Open-vocabulary vision adds language. The system should find not only a fixed list of categories, but anything a person can name clearly enough.",
        ],
        "applications": ["Retail uses detection and recognition for inventory and checkout.", "Accessibility tools name objects, text, and layout for people.", "Scientific imaging locates cells, defects, materials, or events."],
    },
    {
        "kicker": "Topology",
        "title": "Topology Means Which Parts Of The Scene Are Connected",
        "summary": "In vision, topology is about connected regions, holes, boundaries, surfaces, paths, parts, and object relationships.",
        "body": [
            "In everyday words, topology asks what touches, wraps, contains, separates, or connects. Is this region one object or two? Does a road connect to that lane? Is there a hole in the shape? Does a handle loop around empty space?",
            "Topology matters because pixels can look similar while structure differs. A ring and a disk can have similar color, but one has a hole. A drivable road and a blocked road can share texture, but one connects to the path and the other does not.",
            "3D vision uses topology when it decides which surfaces belong together and which spaces are reachable. Segmentation uses topology when it keeps object masks connected. Scene graphs use topology when they store relationships like on, inside, behind, touching, and connected to.",
            "Many failures are topology failures: a model cuts a person into parts, merges two objects, misses a thin connection, invents a bridge in a scene, or ignores that a robot cannot pass through a blocked opening.",
        ],
        "applications": ["Robotics needs connected free space and object handles for action.", "Medical imaging needs organ boundaries, vessels, and connected tissue structures.", "Map and driving systems need lane connectivity and blocked paths.", "Document vision needs table cells, reading order, and layout relationships."],
    },
    {
        "kicker": "3D",
        "title": "A Flat Image Hides Depth",
        "summary": "Recovering 3D means rebuilding distance, surface, shape, and camera position from limited views.",
        "body": [
            "A camera flattens the world. Two points that are far apart in depth can land next to each other in the image. A single image can match many possible 3D worlds.",
            "3D methods use clues: two camera views, object size, shadows, motion, learned priors, or differentiable rendering. The goal is to recover enough shape to inspect, navigate, edit, or render from a new view.",
            "NeRF and Gaussian splatting store scenes in ways that can be rendered from new camera positions. Depth and reconstruction methods estimate where surfaces are in space.",
        ],
        "applications": ["AR needs virtual objects to line up with real surfaces.", "Autonomous driving needs distances and free space.", "Product design and inspection need 3D shape from images or scans."],
    },
    {
        "kicker": "Time",
        "title": "Video Adds Motion And Cause",
        "summary": "A video is not just many images; the order carries meaning.",
        "body": [
            "A single frame may show a ball in the air. A video shows whether it is rising, falling, thrown, dropped, or about to hit something.",
            "Video understanding tracks identity through time, reads action, notices cause, and predicts what may happen next. Video generation must keep objects, camera motion, and physics consistent across frames.",
            "Long video is expensive because there are many frames and many repeated details. The field keeps searching for compact ways to remember only what matters.",
        ],
        "applications": ["Sports and medicine use motion analysis.", "Safety systems detect risky actions over time.", "Video search needs event understanding, not only frame labels."],
    },
    {
        "kicker": "Language",
        "title": "Vision And Language Meet At Meaning",
        "summary": "People ask for visual work in words, so machines need a shared space for images and language.",
        "body": [
            "A label is too small for many tasks. People ask questions, point to regions, request edits, compare charts, describe goals, and give instructions.",
            "Vision-language models connect images with words so a system can answer, describe, retrieve, reason, and act from a visual scene.",
            "The risk is that the language part can overpower the image. A model may answer from common sense rather than what is actually visible. Good systems must stay grounded in the pixels.",
        ],
        "applications": ["Document and chart understanding combine layout, text, and image evidence.", "Robots need language instructions grounded in objects and places.", "Creative tools use language to guide image and video edits."],
    },
    {
        "kicker": "Generation",
        "title": "Generation Writes Pixels From Meaning",
        "summary": "A generator makes images, video, 3D scenes, or edits from text, sketches, layouts, or examples.",
        "body": [
            "Generation is the reverse bridge. Instead of asking what an image means, it starts with meaning and produces pixels that fit.",
            "Diffusion and flow methods make generation into a path: start with noise and move step by step toward a valid image or video. The path must preserve identity, layout, motion, and prompt details.",
            "The hard part is control. A user often wants to change one thing without changing everything else.",
        ],
        "applications": ["Design tools create and edit visual assets.", "Simulation creates training scenes for robots and vehicles.", "Media tools restore, extend, or transform images and video."],
    },
    {
        "kicker": "Action",
        "title": "Vision Matters Most When It Guides Action",
        "summary": "For robots and cars, a vision mistake can become a physical mistake.",
        "body": [
            "Embodied vision closes the loop: see the scene, understand the goal, predict what will happen, choose an action, and check the result.",
            "This makes vision stricter. It is not enough to produce a plausible label. The system must know what space is reachable, which object can be touched, what will move, and what is unsafe.",
            "Vision-language-action models combine visual input, language goals, and motor outputs. They connect CVPR directly to robotics.",
        ],
        "applications": ["Self-driving systems turn visual evidence into steering and braking.", "Warehouse robots use vision to pick, place, and avoid people.", "Assistive robots need visual grounding before acting near humans."],
    },
    {
        "kicker": "Trust",
        "title": "Vision Systems Need Boundaries And Checks",
        "summary": "A system that sees or generates can also be fooled, biased, or misused.",
        "body": [
            "Vision models can fail under weather, lighting, camera changes, rare objects, adversarial edits, or generated fakes.",
            "Generated media creates new duties: provenance, watermarking, fake detection, consent, and the ability to remove private identity or style.",
            "Trust is not one score. It means knowing when the system is uncertain, what evidence it used, and where it should not be used without human review.",
        ],
        "applications": ["News and legal evidence need media provenance.", "Medical systems need uncertainty and review paths.", "Public safety systems need bias, failure, and rare-case checks."],
    },
    {
        "kicker": "Fields",
        "title": "Why Computer Vision Matters Across Fields",
        "summary": "Any field with images, motion, geometry, or visual evidence needs vision.",
        "body": [
            "Robotics needs vision to act. Medicine needs vision to read scans and microscopes. Search needs vision to index images and videos. Hardware matters because vision models can be large, slow, and expensive.",
            "Topology connects vision to other fields. In robotics it is reachable space. In machine learning it is connected regions in representation space. In speech it is connected time segments and speakers. In vision it is the shape and relationship of things seen.",
            "CVPR matters because it shows how raw measurement becomes meaning, and how meaning becomes visual or physical action.",
        ],
        "applications": ["Science gains tools for measuring cells, materials, weather, and space.", "Manufacturing gains visual inspection and 3D reconstruction.", "Education and accessibility gain systems that can explain visual material."],
    },
]

READING_PATH = [
    ("index.html", "All themes"),
    ("hub.html", "The one machine"),
    ("math.html", "The mathematics"),
    ("through-line.html", "Through-line"),
    ("search.html", "Search papers"),
]
