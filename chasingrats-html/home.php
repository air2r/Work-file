<?php get_header(); ?>

<div class="panelContainer">
    <div id="panel1" class="panel bg-1">
        <header class="header-area">
            <div class="container-area">
                <div class="menu-area">
                    <div class="logo logo-bg">
                        <a href="<?php bloginfo('url'); ?>"><img src="<?php the_field('site_logo', 'option'); ?>" alt="Logo"></a>
                    </div>
                    <?php get_template_part('templates/main-menu', false); ?>
                </div>
            </div>
        </header>
        <div class="container-area">
            <div class="panel-content">
                <div class="heading-cont">
                    <h2 class="heading-cont-1"><?php the_field('title_1', 'option'); ?></h2>
                    <h2 class="heading-cont-2"><?php the_field('title_2', 'option'); ?></h2>
                    <h2 class="heading-cont-3"><?php the_field('title_3', 'option'); ?></h2>
                </div>
                <h5><?php the_field('content', 'option'); ?></h5>
                <a href="<?php the_field('button_url', 'option'); ?>" class="theme-btn home-button"><?php the_field('button_title', 'option'); ?> <span> ></span></a>
                <!--                    <a href="" class="theme-btn">learn more <img src="<?php bloginfo('template_url'); ?>/assets/image/theme-btn.svg" alt=" theme-btn"></a>-->
            </div>

        </div>
        <div class="page-manage">
            <div class="active-page-area">
                <div class="active-page">
                    <span class="active"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="active-page-arrow">
                <div class="active-arrow">
                    <ul class="tabs">
                        <li><a href="#panel01"><img src="<?php bloginfo('template_url'); ?>/assets/image/Arrow_Yellow_Down.svg" alt="Arrow_Yellow_Down"></a></li>
                    </ul>
                </div>
            </div>
            
            <div class="socail-icon-area">
                <div class="socail-icon">
                    <a href="<?php the_field('facebook_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/facebook.svg" alt="Facebook"></a>
                    <a href="<?php the_field('twitter_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/twitter.svg" alt="twitter"></a>
                    <a href="<?php the_field('youtube_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/youtube.svg" alt="youtube"></a>
                    <a href="<?php the_field('discord_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/discord.svg" alt="discord"></a>
                    <a href="#"><img src="<?php bloginfo('template_url'); ?>/assets/image/CMF-Logo-BIL-F-1C-Horiz-White-REV-RGB.png" alt="discord"></a>
                    <a href="#"><img src="<?php bloginfo('template_url'); ?>/assets/image/MTLinc_Logo_White.png" alt="discord"></a>
                </div>
            </div>
            
        </div>
    </div>

    <div id="panel01" class="panel bg-2">
        <header class="header-area">
            <div class="container-area">
                <div class="menu-area">
                    <div class="logo logo-bg">
                        <a href="<?php bloginfo('url'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/loog.svg" alt="Logo"></a>
                    </div>
                    <?php get_template_part('templates/main-menu', false); ?>
                </div>
            </div>
        </header>
        <div class="container-area">
            <div class="panel-content">
                <div class="heading-cont">
                    <h2 class="heading-cont-5"><?php the_field('games_section_title', 'option'); ?></h2>
                </div>
                <div class="our-game-items">
                    <?php

                        $games = get_field('games', 'option');

                        ?>
                    <?php if( $games ): ?>
                    <?php foreach( $games as $game ): ?>
                    <div class="our-game-item">
                        <div class="our-game-img">
                            <img src="<?php echo $game['game_image']; ?>" alt="">
                        </div>
                        <div class="our-game-content">
                            <h2><?php echo $game['game_title']; ?></h2>
                            <p><?php echo $game['game_description']; ?></p>
                            <a href="<?php echo $game['game_url']; ?>" class="theme-btn">Read more</a>
                        </div>
                    </div>
                    <?php endforeach; endif; ?>
                </div>
                <!--                    <a href="" class="theme-btn">learn more <img src="assets/image/theme-btn.svg" alt=" theme-btn"></a>-->
            </div>

        </div>
        <div class="page-manage">
            <div class="active-page-area">
                <div class="active-page">
                    <span></span>
                    <span class="active"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="active-page-arrow">
                <div class="active-arrow">
                    <ul class="tabs">
                        <li><a href="#panel1"><img src="<?php bloginfo('template_url'); ?>/assets/image/Arrow_Black_Top.svg" alt="Arrow_Yellow_Down"></a></li>
                        <li><a href="#panel2"><img src="<?php bloginfo('template_url'); ?>/assets/image/Arrow_Black_Down.svg" alt="Arrow_Yellow_Down"></a></li>
                    </ul>
                </div>
            </div>

            <div class="socail-icon-area">
                <div class="socail-icon">
                    <a href="<?php the_field('facebook_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/icon-black/iconmonstr-facebook-4.svg" alt="Facebook"></a>
                    <a href="<?php the_field('twitter_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/icon-black/iconmonstr-twitter-4.svg" alt="twitter"></a>
                    <a href="<?php the_field('youtube_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/icon-black/iconmonstr-youtube-9.svg" alt="youtube"></a>
                    <a href="<?php the_field('discord_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/icon-black/iconmonstr-discord-4.svg" alt="discord"></a>
                    <a href="#"><img src="<?php bloginfo('template_url'); ?>/assets/image/CMF-Logo-BIL-F-1C-Horiz-Black-POS-RGB.png" alt="discord"></a>
                    <a href="#"><img src="<?php bloginfo('template_url'); ?>/assets/image/MTLinc_Logo_Black.png" alt="discord"></a>
                </div>
            </div>
        </div>
    </div>


    <div id="panel2" class="panel bg-2">
        <header class="header-area">
            <div class="container-area">
                <div class="menu-area">
                    <div class="logo logo-bg">
                        <a href="<?php bloginfo('url'); ?>"><img src="<?php the_field('site_logo', 'option'); ?>" alt="Logo"></a>
                    </div>
                    <?php get_template_part('templates/main-menu', false); ?>
                </div>
            </div>
        </header>
        <div class="container-area">
            <div class="panel-content">
                <div class="heading-cont">
                    <h2 class="heading-cont-4"><?php the_field('about_content_title', 'option'); ?></h2>
                </div>

                <?php the_field('about_content', 'option'); ?>

                <div class="about-img">
                    <img src="<?php the_field('about_image', 'option'); ?>" alt="Team">
                </div>
            </div>
        </div>
        <div class="page-manage">
            <div class="active-page-area">
                <div class="active-page">
                    <span></span>
                    <span></span>
                    <span class="active"></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="active-page-arrow">
                <div class="active-arrow">
                    <ul class="tabs">
                        <li><a href="#panel01"><img src="<?php bloginfo('template_url'); ?>/assets/image/Arrow_Black_Top.svg" alt="Arrow_Yellow_Down"></a></li>
                        <li><a href="#panel3"><img src="<?php bloginfo('template_url'); ?>/assets/image/Arrow_Black_Down.svg" alt="Arrow_Yellow_Down"></a></li>
                    </ul>
                </div>
            </div>

            <!--            <?php get_template_part('templates/social-icons', false); ?>-->

            <div class="socail-icon-area">
                <div class="socail-icon">
                    <a href="<?php the_field('facebook_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/icon-black/iconmonstr-facebook-4.svg" alt="Facebook"></a>
                    <a href="<?php the_field('twitter_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/icon-black/iconmonstr-twitter-4.svg" alt="twitter"></a>
                    <a href="<?php the_field('youtube_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/icon-black/iconmonstr-youtube-9.svg" alt="youtube"></a>
                    <a href="<?php the_field('discord_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/icon-black/iconmonstr-discord-4.svg" alt="discord"></a>
                    <a href="#"><img src="<?php bloginfo('template_url'); ?>/assets/image/CMF-Logo-BIL-F-1C-Horiz-Black-POS-RGB.png" alt="discord"></a>
                    <a href="#"><img src="<?php bloginfo('template_url'); ?>/assets/image/MTLinc_Logo_Black.png" alt="discord"></a>
                </div>
            </div>

        </div>
    </div> <!-- end panel 2 -->

    <div id="panel3" class="panel bg-3">
        <header class="header-area">
            <div class="container-area">
                <div class="menu-area">
                    <div class="logo logo-bg">
                        <a href="<?php bloginfo('url'); ?>"><img src="<?php the_field('site_logo', 'option'); ?>" alt="Logo"></a>
                    </div>
                    <?php get_template_part('templates/main-menu', false); ?>
                </div>
            </div>
        </header>
        <div class="container-area">
            <div class="panel-content">
                <div class="heading-cont">
                    <h2 class="heading-cont-5"><?php the_field('job_section_ttitle', 'option'); ?></h2>
                </div>
                <div class="join-team-items-area">

                    <?php

                        $jobs = get_field('jobs', 'option');

                        ?>
                    <?php if( $jobs ): ?>
                    <?php foreach( $jobs as $job ): ?>
                    <div class="join-team-items">
                        <div class="join-team-item">
                            <h6><?php echo $job['job_location']; ?></h6>
                            <h3><?php echo $job['job_title']; ?></h3>
                            <p><?php echo $job['job_description']; ?></p>
                        </div>
                        <div class="join-team-btn">
                            <a href="<?php echo $job['job_url']; ?>" class="theme-btn  active" target="_blank"><?php pll_e('Details'); ?> <span> > </span></a>
                            <a href="mailto:<?php echo $job['job_email']; ?>" class="theme-btn"><?php pll_e('email'); ?> <span> > </span></a>
                        </div>
                    </div>
                    <?php endforeach; ?>
                    <?php endif; ?>

                </div>

            </div>
        </div>
        <div class="page-manage">
            <div class="active-page-area">
                <div class="active-page">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="active"></span>
                    <span></span>
                </div>
            </div>
            <div class="active-page-arrow">
                <div class="active-arrow">
                    <ul class="tabs">
                        <li><a href="#panel2"><img src="<?php bloginfo('template_url'); ?>/assets/image/Arrow_Yellow_Top.svg" alt="Arrow_Yellow_Down"></a></li>
                        <li><a href="#panel4"><img src="<?php bloginfo('template_url'); ?>/assets/image/Arrow_Yellow_Down.svg" alt="Arrow_Yellow_Down"></a></li>
                    </ul>
                </div>
            </div>
            <!--            <?php get_template_part('templates/social-icons', false); ?>-->



            <div class="socail-icon-area">
                <div class="socail-icon">
                    <a href="<?php the_field('facebook_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/facebook.svg" alt="Facebook"></a>
                    <a href="<?php the_field('twitter_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/twitter.svg" alt="twitter"></a>
                    <a href="<?php the_field('youtube_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/youtube.svg" alt="youtube"></a>
                    <a href="<?php the_field('discord_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/discord.svg" alt="discord"></a>
                    <a href="#"><img src="<?php bloginfo('template_url'); ?>/assets/image/CMF-Logo-BIL-F-1C-Horiz-White-REV-RGB.png" alt="discord"></a>
                    <a href="#"><img src="<?php bloginfo('template_url'); ?>/assets/image/MTLinc_Logo_White.png" alt="discord"></a>
                </div>
            </div>


        </div>
        <div class="position-logo">
            <img src="<?php bloginfo('template_url'); ?>/assets/image/bg-logo.png" alt="">
        </div>
    </div> <!-- end panel 3 -->
    <div id="panel4" class="panel bg-2">
        <header class="header-area">
            <div class="container-area">
                <div class="menu-area">
                    <div class="logo logo-bg">
                        <a href="<?php bloginfo('url'); ?>"><img src="<?php the_field('site_logo', 'option'); ?>" alt="Logo"></a>
                    </div>
                    <?php get_template_part('templates/main-menu', false); ?>
                </div>
            </div>
        </header>
        <div class="container-area">
            <div class="panel-content">
                <div class="heading-cont">
                    <h2 class="heading-cont-6"><?php the_field('contact_section_title', 'option'); ?></h2>
                </div>

                <div class="contact-form-area">
                    <div class="contact-form">
                        <?php echo do_shortcode( get_field('contact_form', 'option') ); ?>
                    </div>
                    <div class="contact-content">
                        <h3><?php the_field('contact_address_title', 'option'); ?></h3>
                        <?php echo apply_filters( 'the_content', get_field('contact_address', 'option')); ?>
                        <p class="mt-20"><?php the_field('contact_email', 'option'); ?></p>
                        <p><?php the_field('contact_phone', 'option'); ?></p>

                        <div class="socail-icon">
                            <a href="<?php the_field('facebook_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/icon-black/iconmonstr-facebook-4.svg" alt="Facebook"></a>
                            <a href="<?php the_field('twitter_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/icon-black/iconmonstr-twitter-4.svg" alt="twitter"></a>
                            <a href="<?php the_field('youtube_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/icon-black/iconmonstr-youtube-9.svg" alt="youtube"></a>
                            <a href="<?php the_field('discord_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/icon-black/iconmonstr-discord-4.svg" alt="discord"></a>
                            <a href=""><img src="<?php bloginfo('template_url'); ?>/assets/image/CMF-Logo-BIL-F-1C-Horiz-Black-POS-RGB.png" alt="discord"></a>
                            <a href=""><img src="<?php bloginfo('template_url'); ?>/assets/image/MTLinc_Logo_Black.png" alt="discord"></a>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="page-manage">
            <div class="active-page-area">
                <div class="active-page">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="active"></span>
                </div>
            </div>
            <div class="active-page-arrow">
                <div class="active-arrow">
                    <ul class="tabs">
                        <li><a href="#panel3"><img src="<?php bloginfo('template_url'); ?>/assets/image/Arrow_Black_Top.svg" alt="Arrow_Yellow_Down"></a></li>
                        <!--<li><a href="#panel1"><img src="<?php bloginfo('template_url'); ?>/assets/image/Arrow_Black_Down.svg" alt="Arrow_Yellow_Down"></a></li>-->
                    </ul>
                </div>
            </div>
            <!--            <?php get_template_part('templates/social-icons', false); ?>-->
            <div class="socail-icon-area">
                <div class="socail-icon">
                    <a href="<?php the_field('facebook_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/icon-black/iconmonstr-facebook-4.svg" alt="Facebook"></a>
                    <a href="<?php the_field('twitter_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/icon-black/iconmonstr-twitter-4.svg" alt="twitter"></a>
                    <a href="<?php the_field('youtube_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/icon-black/iconmonstr-youtube-9.svg" alt="youtube"></a>
                    <a href="<?php the_field('discord_url', 'option'); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/image/icon-black/iconmonstr-discord-4.svg" alt="discord"></a>
                    <a href="#"><img src="<?php bloginfo('template_url'); ?>/assets/image/CMF-Logo-BIL-F-1C-Horiz-Black-POS-RGB.png" alt="discord"></a>
                    <a href="#"><img src="<?php bloginfo('template_url'); ?>/assets/image/MTLinc_Logo_Black.png" alt="discord"></a>
                </div>
            </div>
        </div>
        <footer class="footer-area">
            <p><?php the_field('copyright_text', 'option'); ?></p>
        </footer>
    </div> <!-- end panel 4 -->
</div>

<?php get_footer(); ?>
