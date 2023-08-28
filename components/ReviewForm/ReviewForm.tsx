import { IReviewSendResponse, ReviewFormProps } from "./ReviewForm.props";
import { useForm, Controller } from "react-hook-form";
import styles from "./ReviewForm.module.css";
import CloseIcon from "./close.svg";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import { IReviewForm } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "@/helpers/api";
import { useState } from "react";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();

  const [isSuccess, setSuccess] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSendResponse>(
        API.review.createDemo,
        { ...formData, productId }
      );
      if (data.message) {
        setSuccess(true);
        reset();
      }
    } catch (err) {
      console.log(err);
      setSuccess(false);
      setError("Что-то пошло не так");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register("name", {
            required: { value: true, message: "Заполните имя" },
          })}
          placeholder="Имя"
          error={errors.name}
        />
        <Input
          {...register("title", {
            required: { value: true, message: "Заполните заголовок" },
          })}
          placeholder="Заголовок отзыва"
          className={styles.title}
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            render={({ field }) => (
              <Rating
                {...(register("rating"),
                {
                  required: { value: true, message: "Введите оценку" },
                })}
                isEditable
                rating={field.value}
                setRating={field.onChange}
                ref={field.ref}
                error={errors.rating}
              />
            )}
          />
        </div>
        <Textarea
          placeholder="Текст отзыва"
          className={styles.description}
          {...register("description", {
            required: {
              value: true,
              message: "Введите текст отзыва",
            },
          })}
          error={errors.description}
        />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      {isSuccess && (
        <div className={cn(styles.panel, styles.success)}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <CloseIcon
            className={styles.close}
            onClick={() => setSuccess(false)}
          />
        </div>
      )}
      {error && (
        <div className={cn(styles.panel, styles.error)}>
          {error}
          <CloseIcon className={styles.close} onClick={() => setError("")} />
        </div>
      )}
    </form>
  );
};
