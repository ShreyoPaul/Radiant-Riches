import styles from '@/styles/Relative_card.module.css'
import card_img from '@/assets/card_img.png'
import Image from 'next/image';

const Relative_card = ({ data }) => {
    return (
        <div className={styles.related_card}>
            <div className={styles.related_card_img_wrp} >
                <Image src={card_img} alt={"card_img"} className={styles.related_card_img} />
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_tags}>
                    {
                        data.tags?.map((tag, id) => {
                            return (
                                <div className={styles.card_tag}>
                                    {tag}
                                </div>
                            )
                        })
                    }

                </div>
                <div className={styles.title}>
                    {data.title}
                </div>
                <div className={styles.txt}>
                    {data.content}
                </div>
                <div className={styles.price_wrp}>
                    <div className={styles.curr_price}>${data.curr_price}</div>
                    <div className={styles.prev_price}>${data.prev_price}</div>
                    <div className={styles.price_off}>({data.offer}% off)</div>
                </div>
                <div className={styles.view_deal}>View Deal</div>
            </div>
        </div>
    )
}

export default Relative_card