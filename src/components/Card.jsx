import styles from '@/styles/Card.module.css'
import { GoTrophy } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import card_img from '@/assets/card_img.png'
import Image from 'next/image';

const Card = ({ data, num }) => {
    return (
        <div className={styles.card}>
            <div className={styles.part1}>
                {
                    data.tag !== "" &&
                    <div className={styles.best_choice}>
                        <div className={styles.trophy}>{data.tag === "Best Choice" ? <GoTrophy /> : <IoDiamondOutline />}</div>
                        <div>{data.tag}</div>
                    </div>}
                <div className={`${styles.numbering} ${data.tag === "" && styles.top28}`}>{num}</div>
                <div className={styles.image_wrp}>
                    <Image src={card_img} alt="card_img" />
                    <div>Builder 1</div>
                </div>
            </div>
            <div className={styles.part2}>
                <div className={styles.part2_1}>
                    <span className={styles.heading_1}>{data.title}: </span>
                    {data.content}

                </div>
                {data.offer !== 0 && <div className={styles.offer}>{data.offer}% off</div>}
                <div className={styles.part2_2}>
                    <div className={styles.heading_2}>Main highlights</div>
                    <div className={styles.part2_txt}>
                        {
                            data.headlight_content
                        }
                    </div>
                    {
                        data.headlight_points?.length > 0 &&
                        <div className={styles.color_list}>
                            {
                                data.headlight_points.map((data_point, id) => {
                                    return (
                                        <div className={styles.color_list_item} key={id}>
                                            <span>{data_point.no}</span> {data_point.point}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                    {
                        data.why_we_love?.length > 0 &&
                        <div className={styles.transparent_wrp}>
                            <div className={styles.transparent_h}>
                                Why we love it
                            </div>
                            <div className={styles.transparent_list_wrp}>
                                {
                                    data.why_we_love.map((point, id) => {
                                        return (
                                            <div className={styles.transparent_list} key={id}>
                                                <span className={styles.check}>
                                                    <FaCheck />
                                                </span> {point}
                                            </div>)
                                    })
                                }
                            </div>
                        </div>
                    }

                </div>
                <div className={styles.show_more}>Show More</div>
            </div>
            <div className={styles.part3}>
                <div className={styles.rating_wrp}>
                    <div className={styles.rating}>{data.rating}</div>
                    <div>Very Good</div>
                    <div className={styles.stars}>
                        <div className={styles.star}><FaStar /></div>
                        <div className={styles.star}><FaStar /></div>
                        <div className={styles.star}>{data.rating > 9.0 ? <FaStar /> : data.rating > 8.7 ? <FaStarHalfAlt /> : <FaRegStar />}</div>
                        <div className={styles.star}>{data.rating > 9.2 ? <FaStar /> : data.rating > 9.0 ? <FaStarHalfAlt /> : <FaRegStar />}</div>
                        <div className={styles.star}>{data.rating > 9.7 ? <FaStar /> : data.rating > 9.3 ? <FaStarHalfAlt /> : <FaRegStar />}</div>
                    </div>
                </div>
                <div className={styles.view_button}>View</div>
            </div>
        </div>
    )
}

export default Card